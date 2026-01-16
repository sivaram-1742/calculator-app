/**
 * Calculator Application
 * Handles all calculator operations with proper error handling and edge cases
 */

class Calculator {
    constructor(previousDisplayElement, currentDisplayElement) {
        this.previousDisplayElement = previousDisplayElement;
        this.currentDisplayElement = currentDisplayElement;
        this.clear();
    }

    /**
     * Clear all calculator state
     */
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetDisplay = false;
        this.removeErrorState();
    }

    /**
     * Delete the last digit from current operand
     */
    delete() {
        if (this.shouldResetDisplay) return;

        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    /**
     * Append a number or decimal point to the current operand
     * @param {string} number - The number or decimal point to append
     */
    appendNumber(number) {
        // Reset display if we just calculated a result
        if (this.shouldResetDisplay) {
            this.currentOperand = '0';
            this.shouldResetDisplay = false;
        }

        // Prevent multiple decimal points
        if (number === '.' && this.currentOperand.includes('.')) return;

        // Handle initial zero
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }

        this.removeErrorState();
    }

    /**
     * Select an arithmetic operation
     * @param {string} operation - The operation to perform (+, -, *, /)
     */
    chooseOperation(operation) {
        // Don't allow operation if display shows error
        if (this.isErrorState()) return;

        // If we already have an operation, compute the result first
        if (this.previousOperand !== '' && !this.shouldResetDisplay) {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.shouldResetDisplay = true;
    }

    /**
     * Perform the calculation based on the selected operation
     */
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        // Validate operands
        if (isNaN(prev) || isNaN(current)) return;

        // Perform calculation based on operation
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
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        // Handle overflow and invalid results
        if (!isFinite(computation)) {
            this.showError('Result is too large');
            return;
        }

        // Round to avoid floating point precision issues
        computation = this.roundResult(computation);

        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetDisplay = true;
    }

    /**
     * Round result to avoid floating point precision issues
     * @param {number} number - The number to round
     * @returns {number} - The rounded number
     */
    roundResult(number) {
        // Round to 10 decimal places to avoid floating point errors
        return Math.round(number * 10000000000) / 10000000000;
    }

    /**
     * Format number for display with proper decimal places
     * @param {string} number - The number to format
     * @returns {string} - The formatted number
     */
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            // Add thousands separators for better readability
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    /**
     * Get the display symbol for the operation
     * @param {string} operation - The operation symbol
     * @returns {string} - The display symbol
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
     * Update the calculator display
     */
    updateDisplay() {
        this.currentDisplayElement.textContent = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.previousDisplayElement.textContent =
                `${this.getDisplayNumber(this.previousOperand)} ${this.getOperationSymbol(this.operation)}`;
        } else {
            this.previousDisplayElement.textContent = '';
        }
    }

    /**
     * Show error message on display
     * @param {string} message - The error message to display
     */
    showError(message) {
        this.currentOperand = message;
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetDisplay = true;

        // Add error class to display
        const display = document.querySelector('.display');
        display.classList.add('error');
    }

    /**
     * Remove error state from display
     */
    removeErrorState() {
        const display = document.querySelector('.display');
        display.classList.remove('error');
    }

    /**
     * Check if calculator is in error state
     * @returns {boolean} - True if in error state
     */
    isErrorState() {
        return isNaN(parseFloat(this.currentOperand));
    }
}

// ===== INITIALIZE CALCULATOR =====
const previousDisplayElement = document.querySelector('.display-previous');
const currentDisplayElement = document.querySelector('.display-current');
const calculator = new Calculator(previousDisplayElement, currentDisplayElement);

// ===== EVENT LISTENERS FOR BUTTONS =====

// Number buttons
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
    });
});

// Operator buttons
document.querySelectorAll('[data-operator]').forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay();

        // Visual feedback for active operator
        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

// Equals button
document.querySelector('[data-action="equals"]').addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();

    // Remove active state from operators
    document.querySelectorAll('[data-operator]').forEach(btn => {
        btn.classList.remove('active');
    });
});

// Clear button
document.querySelector('[data-action="clear"]').addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();

    // Remove active state from operators
    document.querySelectorAll('[data-operator]').forEach(btn => {
        btn.classList.remove('active');
    });
});

// Delete button
document.querySelector('[data-action="delete"]').addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

// ===== KEYBOARD SUPPORT =====
document.addEventListener('keydown', (e) => {
    // Prevent default behavior for calculator keys
    if (e.key.match(/[0-9.+\-*/=]/) || e.key === 'Enter' || e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
    }

    // Numbers and decimal point
    if (e.key >= '0' && e.key <= '9') {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    }

    if (e.key === '.') {
        calculator.appendNumber('.');
        calculator.updateDisplay();
    }

    // Operators
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        calculator.chooseOperation(e.key);
        calculator.updateDisplay();
    }

    // Equals
    if (e.key === '=' || e.key === 'Enter') {
        calculator.compute();
        calculator.updateDisplay();

        // Remove active state from operators
        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    // Clear
    if (e.key === 'Escape') {
        calculator.clear();
        calculator.updateDisplay();

        // Remove active state from operators
        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    // Delete/Backspace
    if (e.key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    }
});

// ===== ACCESSIBILITY: KEYBOARD USER DETECTION =====
let isKeyboardUser = false;

document.addEventListener('keydown', () => {
    isKeyboardUser = true;
    document.body.classList.add('keyboard-user');
});

document.addEventListener('mousedown', () => {
    isKeyboardUser = false;
    document.body.classList.remove('keyboard-user');
});

// ===== INITIAL DISPLAY UPDATE =====
calculator.updateDisplay();

// Log initialization
console.log('Calculator initialized successfully! 🧮');
console.log('Keyboard shortcuts:');
console.log('- Numbers: 0-9');
console.log('- Operators: +, -, *, /');
console.log('- Calculate: Enter or =');
console.log('- Clear: Escape');
console.log('- Delete: Backspace');
