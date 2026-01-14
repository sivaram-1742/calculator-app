# Quick Start Guide

## 🚀 Get Started in 30 Seconds

### Option 1: Double-Click Method
1. Navigate to the project folder
2. Double-click `index.html`
3. Calculator opens in your default browser
4. Start calculating! 🎉

### Option 2: Command Line Method
```bash
# Navigate to project directory
cd /workspace/git-calc-app-2-29cdb00/repo

# Open in browser (choose your platform)
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Option 3: Local Server (Optional)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

---

## 🎯 First Calculation

Try this simple calculation:
1. Click `5`
2. Click `+`
3. Click `3`
4. Click `=`
5. See result: `8` ✓

---

## ⌨️ Try Keyboard Shortcuts

Type on your keyboard:
```
7 * 8 Enter
```
Result: `56`

Press `Escape` to clear!

---

## 📱 Mobile Device

1. Transfer files to your phone/tablet
2. Open `index.html` in mobile browser
3. Use touch gestures to tap buttons
4. Fully responsive design!

---

## 🎨 Customize Colors

Want different colors? Edit `styles.css`:

```css
:root {
    --bg-primary: #1a1a2e;      /* Background color */
    --accent-primary: #e94560;   /* Equals button */
    --btn-operator: #533483;     /* Operator buttons */
    /* Change any color you like! */
}
```

---

## ✅ Verify It Works

### Quick Tests

**Test 1: Basic Math**
```
Input: 10 - 4
Result: 6 ✓
```

**Test 2: Decimals**
```
Input: 3.5 + 2.5
Result: 6 ✓
```

**Test 3: Division by Zero**
```
Input: 5 ÷ 0
Result: Error message appears ✓
```

---

## 📚 Learn More

- **Full Documentation**: See `README.md`
- **All Features**: See `FEATURES.md`
- **Testing Guide**: See `TESTING.md`

---

## 🎓 Example Calculations

### Simple
```
2 + 2 = 4
10 - 5 = 5
6 × 7 = 42
20 ÷ 4 = 5
```

### With Decimals
```
3.14 × 2 = 6.28
10.5 ÷ 2 = 5.25
0.1 + 0.2 = 0.3
```

### Chain Calculations
```
5 + 3 - 2 = 6
(Calculates: 5+3=8, then 8-2=6)
```

---

## 🔧 Troubleshooting

### Calculator doesn't load?
- ✅ Make sure all 3 files are in the same folder:
  - `index.html`
  - `styles.css`
  - `calculator.js`

### Buttons don't work?
- ✅ Check JavaScript is enabled in browser
- ✅ Try a different browser
- ✅ Check browser console for errors (F12)

### Looks broken on mobile?
- ✅ Make sure viewport meta tag is present (it is!)
- ✅ Try refreshing the page
- ✅ Clear browser cache

---

## 💡 Pro Tips

1. **Keyboard is faster**: Use keyboard for quick calculations
2. **Chain operations**: Don't press `=` after each operation
3. **Clear vs Delete**:
   - `AC` clears everything
   - `DEL` removes last digit only
4. **Error messages**: Auto-hide after 3 seconds
5. **Decimal shortcut**: Type `.5` for `0.5`

---

## 🎉 That's It!

You now have a fully functional calculator. Enjoy calculating! 🧮

**No installation • No setup • Just works**

---

## 📞 Need Help?

Check the documentation:
- Questions about features? → `FEATURES.md`
- Want to test thoroughly? → `TESTING.md`
- Technical details? → `README.md`

Happy calculating! 🎊
