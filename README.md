# 🎮 Tic-Tac-Toe Game

A modern, fully accessible tic-tac-toe game built with vanilla HTML, CSS, and JavaScript. Features a beautiful dark theme, smooth animations, and persistent score tracking.

## ✨ Features

- **Interactive 3x3 Game Board**: Click or use keyboard (1-9 keys) to make moves
- **Two-Player Gameplay**: Alternating turns between X and O players
- **Win Detection**: Automatically detects wins across rows, columns, and diagonals
- **Tie Detection**: Recognizes when the game ends in a draw
- **Turn Indicator**: Clear display of the current player
- **Score Tracking**: Persistent scoreboard using localStorage
- **Reset Button**: Start a new game anytime (or press 'R' key)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessible**: Full ARIA labels and screen reader support
- **Smooth Animations**: Modern UI with engaging visual feedback

## 🚀 Getting Started

Simply open `index.html` in any modern web browser. No build process or dependencies required!

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the directory
cd repo

# Open in browser
open index.html
```

## 🎯 How to Play

1. Player X starts first
2. Click on any empty cell to place your mark
3. Players alternate turns (X → O → X → O...)
4. First player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, the game is a tie
6. Click "New Game" to start over

## ⌨️ Keyboard Shortcuts

- **1-9 Keys**: Select cells 1-9 (left to right, top to bottom)
- **R Key**: Reset game and start new round

## 🎨 Features

### Accessibility
- Semantic HTML elements
- ARIA labels for all interactive elements
- Screen reader announcements for game state
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support

### Responsive Design
- Mobile-first approach
- Works on screens from 320px to 4K
- Touch-friendly tap targets
- Optimized layouts for different screen sizes

### User Experience
- Smooth animations and transitions
- Visual feedback on hover and click
- Color-coded players (X = red, O = cyan)
- Winning cells highlighted in green
- Persistent score tracking across sessions

## 📁 File Structure

```
repo/
├── index.html    # Main HTML structure
├── styles.css    # All styling and animations
├── script.js     # Game logic and interactions
└── README.md     # Documentation
```

## 🛠️ Technical Details

- **No Dependencies**: Pure vanilla JavaScript, no frameworks or libraries
- **Modern CSS**: CSS Grid, Flexbox, CSS Variables, and Animations
- **localStorage**: Persistent score tracking
- **ES6+**: Modern JavaScript features
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 🎨 Customization

You can easily customize the game by modifying CSS variables in `styles.css`:

```css
:root {
    --color-primary: #6366f1;      /* Primary accent color */
    --color-x: #f43f5e;            /* Player X color */
    --color-o: #06b6d4;            /* Player O color */
    --color-bg: #0f172a;           /* Background color */
    --color-surface: #1e293b;      /* Card background */
    /* ... and more */
}
```

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and make improvements!

---

**Enjoy the game! 🎉**
