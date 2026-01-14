/**
 * Calculator Application
 * Handles basic arithmetic operations with proper error handling and edge cases
 */

class Calculator {
    constructor(previousOperandElement, currentOperandElement, errorElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.errorElement = errorElement;
        this.clear();
    }

    /**
     * Clear all calculator state
     */
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
        this.hideError();
    }

    /**
     * Delete the last digit from current operand
     */
    delete() {
        if (this.shouldResetScreen) return;

        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    /**
     * Append a number to the current operand
     * @param {string} number - The number or decimal point to append
     */
    appendNumber(number) {
        // Reset screen after calculation
        if (this.shouldResetScreen) {
            this.currentOperand = '0';
            this.shouldResetScreen = false;
        }

        // Handle decimal point
        if (number === '.' && this.currentOperand.includes('.')) {
            return; // Prevent multiple decimal points
        }

        // Handle leading zero
        if (this.currentOperand === '0') {
            if (number === '.') {
                this.currentOperand = '0.';
            } else {
                this.currentOperand = number;
            }
        } else {
            this.currentOperand += number;
        }

        this.hideError();
    }

    /**
     * Select an operation
     * @param {string} operation - The operation to perform (+, -, *, /)
     */
    chooseOperation(operation) {
        // If current is empty or just reset, don't proceed
        if (this.currentOperand === '') return;

        // If there's a previous operation, calculate it first
        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
        this.shouldResetScreen = false;
    }

    /**
     * Perform the calculation
     */
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        // Validation
        if (isNaN(prev) || isNaN(current)) return;

        // Perform operation
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                // Handle division by zero
                if (current === 0) {
                    this.showError('Cannot divide by zero');
                    this.clear();
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        // Handle result
        if (!isFinite(computation)) {
            this.showError('Result is too large');
            this.clear();
            return;
        }

        // Round to avoid floating point precision issues
        // Keep up to 10 decimal places, then remove trailing zeros
        this.currentOperand = this.formatResult(computation);
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
    }

    /**
     * Format the computation result
     * @param {number} number - The number to format
     * @returns {string} Formatted number string
     */
    formatResult(number) {
        // Handle very large or very small numbers with scientific notation
        if (Math.abs(number) > 1e15 || (Math.abs(number) < 1e-6 && number !== 0)) {
            return number.toExponential(6).replace(/\.?0+e/, 'e');
        }

        // Round to avoid floating point errors and remove trailing zeros
        const rounded = Math.round(number * 1e10) / 1e10;
        return rounded.toString();
    }

    /**
     * Format number for display with thousand separators
     * @param {string} number - The number to format
     * @returns {string} Formatted number string
     */
    getDisplayNumber(number) {
        if (number === '') return '';

        const stringNumber = number.toString();
        const [integerPart, decimalPart] = stringNumber.split('.');

        let formattedInteger;
        if (isNaN(integerPart)) {
            formattedInteger = '';
        } else {
            // Add thousand separators
            formattedInteger = parseFloat(integerPart).toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }

        if (decimalPart != null) {
            return `${formattedInteger}.${decimalPart}`;
        } else {
            return formattedInteger;
        }
    }

    /**
     * Update the display with current values
     */
    updateDisplay() {
        this.currentOperandElement.textContent =
            this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            const operationSymbol = this.getOperationSymbol(this.operation);
            this.previousOperandElement.textContent =
                `${this.getDisplayNumber(this.previousOperand)} ${operationSymbol}`;
        } else {
            this.previousOperandElement.textContent = '';
        }
    }

    /**
     * Get display symbol for operation
     * @param {string} operation - The operation
     * @returns {string} Display symbol
     */
    getOperationSymbol(operation) {
        const symbols = {
            '+': '+',
            '-': '−',
            '*': '×',
            '/': '÷'
        };
        return symbols[operation] || operation;
    }

    /**
     * Show error message
     * @param {string} message - Error message to display
     */
    showError(message) {
        this.errorElement.textContent = message;
        this.errorElement.classList.add('show');

        // Auto-hide after 3 seconds
        setTimeout(() => this.hideError(), 3000);
    }

    /**
     * Hide error message
     */
    hideError() {
        this.errorElement.classList.remove('show');
    }
}

// Initialize calculator
const previousOperandElement = document.querySelector('.previous-operand');
const currentOperandElement = document.querySelector('.current-operand');
const errorElement = document.querySelector('.error-message');

const calculator = new Calculator(
    previousOperandElement,
    currentOperandElement,
    errorElement
);

// Event Listeners for number buttons
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
    });
});

// Event Listeners for operator buttons
document.querySelectorAll('[data-operator]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay();
    });
});

// Event Listener for equals button
document.querySelector('[data-action="equals"]').addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

// Event Listener for clear button
document.querySelector('[data-action="clear"]').addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

// Event Listener for delete button
document.querySelector('[data-action="delete"]').addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    // Numbers and decimal point
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    }

    // Operations
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        calculator.chooseOperation(e.key);
        calculator.updateDisplay();
    }

    // Equals
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculator.compute();
        calculator.updateDisplay();
    }

    // Clear
    if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        calculator.clear();
        calculator.updateDisplay();
    }

    // Delete
    if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        calculator.delete();
        calculator.updateDisplay();
    }
});

// Initialize display
calculator.updateDisplay();
