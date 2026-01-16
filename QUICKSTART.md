# Quick Start Guide

## 🚀 Get Started in 30 Seconds

### Option 1: Double-Click (Easiest)
1. Navigate to the project folder
2. Double-click `index.html`
3. Calculator opens in your default browser
4. Start calculating!

### Option 2: Local Server (Best for Development)

**Using Python** (most common):
```bash
cd /workspace/git-calc-app-2-29cdb00/repo
python3 -m http.server 8000
```
Open: http://localhost:8000

**Using Node.js**:
```bash
npx serve
```

**Using PHP**:
```bash
php -S localhost:8000
```

## 📱 How to Use

### Mouse/Touch
1. **Enter numbers** - Click digit buttons
2. **Choose operation** - Click +, −, ×, or ÷
3. **Get result** - Click = button
4. **Clear** - Click AC button
5. **Delete** - Click DEL button

### Keyboard
1. **Type numbers** - Press 0-9
2. **Type operation** - Press +, -, *, /
3. **Calculate** - Press Enter or =
4. **Clear** - Press Escape
5. **Delete** - Press Backspace

## 💡 Example Calculations

### Basic Math
```
5 + 3 = 8
10 - 4 = 6
6 × 7 = 42
20 ÷ 4 = 5
```

### Decimals
```
0.1 + 0.2 = 0.3
5.5 × 2 = 11
10.5 ÷ 3 = 3.5
```

### Chain Operations
```
5 + 3 = 8, then × 2 = 16
(Calculator: 5 + 3 × 2 = 16)
```

## 🧪 Run Tests

1. Open `test.html` in your browser
2. Tests run automatically
3. View results: ✓ = pass, ✗ = fail
4. All 20 tests should pass!

## ⚡ Quick Tips

- **Chain calculations**: After pressing =, continue with another operation
- **Fix mistakes**: Use DEL to remove last digit, AC to start over
- **Keyboard shortcuts**: Faster than clicking!
- **Mobile friendly**: Works great on phones and tablets
- **No installation**: Just HTML, CSS, and JavaScript

## 🎨 Customize Colors

Edit `styles.css`:

```css
:root {
    --bg-primary: #1a1a2e;        /* Background gradient start */
    --bg-secondary: #16213e;      /* Background gradient end */
    --bg-calculator: #0f3460;     /* Calculator body */
    --btn-number: #1e3a5f;        /* Number buttons */
    --btn-operator: #e94560;      /* Operator buttons */
    --btn-equals: #16a085;        /* Equals button */
}
```

Change the hex colors to your preference!

## 📂 File Overview

```
repo/
├── index.html       ← Main app (open this!)
├── styles.css       ← Styles and colors
├── calculator.js    ← Calculator logic
├── test.html        ← Test suite
├── README.md        ← Full documentation
├── FEATURES.md      ← Feature list
└── QUICKSTART.md    ← This file
```

## 🐛 Troubleshooting

### Calculator doesn't work
- Check browser console for errors (F12)
- Make sure all 3 files are in same folder
- Try a different browser (Chrome, Firefox, Safari)

### Buttons don't respond
- Refresh the page (Ctrl+R or Cmd+R)
- Check if JavaScript is enabled
- Try clicking a bit slower

### Display shows weird numbers
- This is normal for very small decimals
- Click AC to clear and start over

### Keyboard doesn't work
- Click inside the calculator first
- Make sure no other app is capturing keys
- Try clicking AC button first

## 🎯 Next Steps

1. ✅ Open calculator in browser
2. ✅ Try basic calculations
3. ✅ Test keyboard shortcuts
4. ✅ Run test suite
5. ✅ Customize colors (optional)
6. ✅ Read full README.md for details

## 📞 Need More Help?

- **Full Documentation**: See `README.md`
- **Feature Details**: See `FEATURES.md`
- **Browser Console**: Press F12 to see logs
- **Test Suite**: Open `test.html` to verify functionality

## 🎉 You're Ready!

Open `index.html` and start calculating!

---

**Pro Tip**: Bookmark `index.html` in your browser for quick access!
