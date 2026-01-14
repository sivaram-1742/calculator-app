# Calculator Web Application

A modern, fully-functional calculator built with vanilla HTML, CSS, and JavaScript. Features a clean interface, keyboard support, and comprehensive error handling.

## Features

### Core Functionality
- ✅ **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- ✅ **Number Input**: Digits 0-9 and decimal point support
- ✅ **Clear (AC)**: Reset calculator to initial state
- ✅ **Delete (DEL)**: Remove last digit entered
- ✅ **Equals (=)**: Execute calculation

### Advanced Features
- 🎹 **Keyboard Support**: Full keyboard navigation and input
- ♿ **Accessibility**: ARIA labels, semantic HTML, screen reader support
- 🎨 **Modern UI**: Gradient background, smooth animations, responsive design
- 📱 **Mobile-First**: Fully responsive design for all screen sizes
- ⚠️ **Error Handling**: Division by zero, overflow detection
- 🔢 **Smart Formatting**: Thousand separators, decimal precision handling
- ⚡ **Chain Operations**: Perform multiple operations in sequence

## Usage

### Mouse/Touch Input
1. Click number buttons to input digits
2. Click operator buttons (+, -, ×, ÷) to select operation
3. Click equals (=) to calculate result
4. Click AC to clear all
5. Click DEL to delete last digit

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0-9` | Input digits |
| `.` | Decimal point |
| `+` `-` `*` `/` | Operations |
| `Enter` or `=` | Calculate |
| `Escape` or `C` | Clear all |
| `Backspace` or `Delete` | Delete digit |

## Technical Details

### Architecture
The calculator is built using object-oriented JavaScript with a `Calculator` class that handles all calculation logic and state management.

### Key Components

#### HTML (`index.html`)
- Semantic HTML5 structure
- ARIA labels for accessibility
- Responsive meta tags
- Clear separation of display and controls

#### CSS (`styles.css`)
- CSS custom properties for theming
- CSS Grid for button layout
- Mobile-first responsive design
- Smooth transitions and animations
- Support for prefers-reduced-motion
- High contrast mode support

#### JavaScript (`calculator.js`)
- ES6+ class-based architecture
- Comprehensive error handling
- Floating point precision management
- Keyboard event handling
- Chain calculation support

### Edge Cases Handled

1. **Division by Zero**: Displays error message and resets calculator
2. **Multiple Decimal Points**: Prevents entering more than one decimal point
3. **Floating Point Precision**: Rounds results to avoid JavaScript floating point errors
4. **Large Numbers**: Uses scientific notation for very large/small numbers
5. **Leading Zeros**: Handles leading zeros intelligently
6. **Empty Operations**: Prevents operations on empty values
7. **Chain Calculations**: Supports multiple operations in sequence

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
calculator-app/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── calculator.js       # Calculator logic and event handlers
└── README.md          # Documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Start calculating!

No build process or dependencies required - just pure HTML, CSS, and JavaScript.

## Development

### Code Organization
- **Calculator Class**: Encapsulates all calculator logic
- **Event Listeners**: Separate listeners for buttons and keyboard
- **Display Management**: Automatic formatting and updates
- **Error Handling**: Graceful error messages with auto-dismiss

### Best Practices Implemented
- ✅ Separation of concerns
- ✅ DRY (Don't Repeat Yourself) principles
- ✅ Comprehensive comments and documentation
- ✅ Accessible by default
- ✅ Progressive enhancement
- ✅ Mobile-first approach

## Customization

### Color Scheme
Edit CSS custom properties in `:root` to change colors:
```css
:root {
    --bg-primary: #1a1a2e;
    --accent-primary: #e94560;
    /* ... more colors */
}
```

### Button Layout
Modify the grid layout in `.buttons` class to change button arrangement.

## License

This project is open source and available for personal and commercial use.

## Credits

Built with modern web standards and best practices in mind.
