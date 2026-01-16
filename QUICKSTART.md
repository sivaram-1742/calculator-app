# 🚀 Quick Start Guide

## Get Playing in 30 Seconds!

### Option 1: Open Directly
1. Double-click `index.html`
2. Start playing! ✨

### Option 2: Use a Local Server (Recommended)
```bash
# If you have Python 3
python3 -m http.server 8000

# If you have Node.js
npx serve

# If you have PHP
php -S localhost:8000
```

Then open: http://localhost:8000

## 🎮 How to Play

### Basic Rules
1. **X goes first** - Click any empty cell
2. **O goes next** - Players alternate
3. **Get 3 in a row** - Horizontal, vertical, or diagonal wins
4. **Click "New Game"** - Start fresh anytime

### Controls
- **Mouse/Touch**: Click/tap cells
- **Keyboard**: Press 1-9 for cells (1=top-left, 9=bottom-right)
- **Reset**: Click "New Game" button or press R

## ✨ Features at a Glance

| Feature | Description |
|---------|-------------|
| 🎯 Two-Player | X vs O gameplay |
| 🏆 Win Detection | Automatic winner detection |
| 🤝 Tie Detection | Recognizes draws |
| 📊 Score Tracking | Persistent scoreboard |
| ⌨️ Keyboard Support | Number keys 1-9, R to reset |
| 📱 Mobile Friendly | Works on all devices |
| ♿ Accessible | Screen reader support |
| 🎨 Beautiful UI | Dark theme with animations |

## 📁 Project Structure

```
repo/
├── index.html      ← Open this file!
├── styles.css      ← All the styling
├── script.js       ← Game logic
├── README.md       ← Full documentation
├── FEATURES.md     ← Detailed features
├── QUICKSTART.md   ← This file
└── test.html       ← Test suite
```

## 🎯 First Game Walkthrough

1. **Start**: X's turn is shown at the top
2. **Click**: Choose any cell (or press 1-9)
3. **Watch**: X appears with animation
4. **Continue**: O's turn now
5. **Win**: Get 3 in a row - cells highlight green!
6. **Score**: Your win is recorded automatically
7. **Reset**: Click "New Game" to play again

## 🔧 Customization

Want different colors? Edit `styles.css`:

```css
:root {
    --color-x: #f43f5e;  /* Change X color */
    --color-o: #06b6d4;  /* Change O color */
}
```

## ❓ Troubleshooting

### Game not loading?
- Make sure all files are in the same directory
- Try using a local server instead of file://
- Check browser console for errors (F12)

### Styles not showing?
- Verify `styles.css` is in the same folder as `index.html`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### JavaScript not working?
- Verify `script.js` is in the same folder as `index.html`
- Check if JavaScript is enabled in your browser
- Look for errors in browser console (F12)

## 🎓 Learning Resources

This project demonstrates:
- ✅ Vanilla JavaScript (no frameworks!)
- ✅ CSS Grid and Flexbox
- ✅ Event handling
- ✅ DOM manipulation
- ✅ Local storage
- ✅ Responsive design
- ✅ Accessibility (ARIA, keyboard navigation)
- ✅ CSS animations

Perfect for learning modern web development! 🚀

## 📚 More Information

- **Full Documentation**: See `README.md`
- **Feature Details**: See `FEATURES.md`
- **Run Tests**: Open `test.html`

## 🎉 Enjoy!

That's it! You're ready to play. Have fun! 🎮

---

**Pro Tip**: Bookmark the game for quick access anytime! 🔖
