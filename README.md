# Calculator Web Application

A modern, responsive calculator built with vanilla HTML, CSS, and JavaScript. Features a clean UI, full keyboard support, and robust error handling.

## Features

### Core Functionality
- ✅ Basic arithmetic operations (addition, subtraction, multiplication, division)
- ✅ Decimal number support
- ✅ Chain calculations
- ✅ Delete last digit (DEL button)
- ✅ Clear all (AC button)
- ✅ Division by zero protection
- ✅ Floating point precision handling
- ✅ Number formatting with thousands separators

### User Experience
- 🎨 Modern, gradient-based dark theme
- 📱 Fully responsive design (mobile-first)
- ⌨️ Complete keyboard support
- ♿ Accessibility features (ARIA labels, focus indicators)
- 🎯 Visual feedback for button interactions
- 🔊 Screen reader friendly

### Keyboard Shortcuts
- **Numbers**: `0-9`
- **Decimal**: `.`
- **Operations**: `+`, `-`, `*`, `/`
- **Calculate**: `Enter` or `=`
- **Clear**: `Escape`
- **Delete**: `Backspace`

## File Structure

```
/workspace/git-calc-app-2-29cdb00/repo/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS with custom properties
├── calculator.js       # Calculator logic and event handlers
├── test.html          # Comprehensive test suite
└── README.md          # This file
```

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in any modern web browser.

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## Usage

### Button Interface
1. Click number buttons to input digits
2. Click operator buttons (+, −, ×, ÷) to select operation
3. Click `=` to calculate result
4. Click `AC` to clear everything
5. Click `DEL` to delete the last digit

### Keyboard Interface
Simply start typing numbers and operations. The calculator will respond to all keyboard inputs.

## Testing

Open `test.html` in your browser to run the automated test suite. The test suite includes:

- ✅ Initialization tests
- ✅ Number input tests
- ✅ Decimal handling tests
- ✅ All arithmetic operations
- ✅ Error handling (division by zero)
- ✅ Clear and delete functions
- ✅ Chain operation tests
- ✅ Floating point precision tests
- ✅ Number formatting tests

## Technical Details

### Architecture
- **Object-Oriented Design**: Calculator class encapsulates all logic
- **Separation of Concerns**: HTML structure, CSS presentation, JS behavior
- **Event-Driven**: Button clicks and keyboard events
- **State Management**: Internal state tracking for operands and operations

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+
- All modern mobile browsers

### Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader announcements
- High contrast mode support
- Reduced motion support

### Performance Optimizations
- CSS custom properties for theming
- Hardware-accelerated transforms
- Efficient event delegation
- Minimal DOM manipulations

## Edge Cases Handled

1. **Division by Zero**: Shows error message instead of crashing
2. **Multiple Decimals**: Prevents entering more than one decimal point
3. **Floating Point Precision**: Rounds results to avoid JavaScript precision errors
4. **Large Numbers**: Formats with thousands separators for readability
5. **Overflow**: Detects and handles infinite results
6. **Chain Operations**: Properly computes when selecting new operation
7. **Reset After Equals**: Next number input starts fresh calculation

## Customization

### Color Scheme
Edit CSS custom properties in `styles.css`:

```css
:root {
    --bg-primary: #1a1a2e;
    --bg-calculator: #0f3460;
    --btn-number: #1e3a5f;
    --btn-operator: #e94560;
    /* ... more variables */
}
```

### Calculator Size
Adjust the max-width in `.calculator-container`:

```css
.calculator-container {
    max-width: 400px; /* Change this value */
}
```

## Development

### Adding New Operations
1. Add button to HTML with `data-operator` attribute
2. Update `compute()` method in `Calculator` class
3. Add display symbol to `getOperationSymbol()` method
4. Add keyboard shortcut in keyboard event listener
5. Write tests in `test.html`

### Code Quality
- Clean, self-documenting code
- Comprehensive comments
- Consistent naming conventions
- Error handling throughout
- Defensive programming practices

## License

This project is free to use for educational and personal purposes.

## Credits

Built with modern web standards and best practices.
