# 📦 Installation & Usage Guide

## Quick Start (3 Steps)

### 1️⃣ Get the Files
All files are already in `/workspace/git-calc-app-2-29cdb00/repo/`:
```
repo/
├── index.html          ← Main game file
├── styles.css          ← Styling
├── script.js           ← Game logic
├── README.md           ← Documentation
├── FEATURES.md         ← Feature details
├── QUICKSTART.md       ← Quick guide
├── PROJECT_SUMMARY.md  ← Project overview
├── INSTALLATION.md     ← This file
└── test.html           ← Tests
```

### 2️⃣ Open the Game
**Method A: Direct Open** (Easiest)
- Double-click `index.html`
- Game opens in your default browser
- Start playing immediately! 🎮

**Method B: Local Server** (Recommended)
```bash
# Python 3
cd repo
python3 -m http.server 8000
# Open http://localhost:8000

# Node.js
npx serve
# Open http://localhost:3000

# PHP
php -S localhost:8000
# Open http://localhost:8000
```

### 3️⃣ Play!
- Click cells or use keyboard (1-9)
- Get 3 in a row to win
- Press R or click "New Game" to reset

## 🎮 Gameplay

### Rules
1. X always starts first
2. Players alternate turns
3. Click any empty cell to place your mark
4. First to get 3 in a row wins (horizontal, vertical, or diagonal)
5. If all cells are filled with no winner, it's a tie

### Controls

**Mouse/Touch:**
- Click or tap any empty cell to play

**Keyboard:**
- `1-9` - Select cells (1=top-left, 9=bottom-right)
- `R` - Reset/New game
- `Tab` - Navigate between elements
- `Enter/Space` - Activate focused button

### Cell Numbering
```
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
```

## 📱 Device Compatibility

### Desktop
- ✅ Windows (Chrome, Firefox, Edge)
- ✅ macOS (Safari, Chrome, Firefox)
- ✅ Linux (Chrome, Firefox)

### Mobile
- ✅ iOS (Safari, Chrome)
- ✅ Android (Chrome, Firefox, Samsung Internet)

### Tablets
- ✅ iPad (Safari, Chrome)
- ✅ Android tablets (Chrome, Firefox)

## 🛠️ Requirements

### Minimum Requirements
- **Browser**: Any modern browser (2020+)
- **JavaScript**: Must be enabled
- **Screen**: 320px width minimum
- **Storage**: ~50KB disk space

### Recommended
- **Browser**: Latest version of Chrome, Firefox, Safari, or Edge
- **Screen**: 375px+ width for optimal experience
- **Connection**: None required (works offline!)

## 🔧 Troubleshooting

### Game Won't Load
**Issue**: Blank page or files not found
**Solution**: 
- Ensure all files (HTML, CSS, JS) are in the same directory
- Try opening with a local server instead of file://
- Check browser console (F12) for error messages

### Styles Not Showing
**Issue**: Game looks plain or unstyled
**Solution**:
- Verify `styles.css` is in the same folder as `index.html`
- Check that the CSS file name is exactly `styles.css`
- Clear browser cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Disable browser extensions that might block styles

### JavaScript Not Working
**Issue**: Can't click cells or game doesn't respond
**Solution**:
- Verify `script.js` is in the same folder as `index.html`
- Check if JavaScript is enabled in browser settings
- Check browser console (F12) for JavaScript errors
- Try a different browser

### Scores Not Saving
**Issue**: Score resets after refresh
**Solution**:
- localStorage must be enabled (check browser privacy settings)
- Don't use private/incognito mode
- Check browser permissions for local storage

### Mobile Issues
**Issue**: Difficult to tap cells on mobile
**Solution**:
- Zoom out if cells are too large
- Ensure you're tapping the center of cells
- Try landscape mode for larger cells
- Update your mobile browser to the latest version

## 🎨 Customization

### Change Colors
Edit `styles.css` at the top:
```css
:root {
    --color-x: #f43f5e;      /* X color (default: red) */
    --color-o: #06b6d4;      /* O color (default: cyan) */
    --color-primary: #6366f1; /* Button color (default: blue) */
    --color-bg: #0f172a;      /* Background (default: dark) */
}
```

### Change Animations
Edit the animation timing in `styles.css`:
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Disable Animations
Add this to `styles.css`:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

## 📊 Features Overview

| Feature | Status |
|---------|--------|
| 3x3 Game Board | ✅ |
| Two-Player Mode | ✅ |
| Win Detection | ✅ |
| Tie Detection | ✅ |
| Score Tracking | ✅ |
| Keyboard Support | ✅ |
| Mobile Responsive | ✅ |
| Accessibility | ✅ |
| Animations | ✅ |
| Offline Play | ✅ |

## 🧪 Testing

### Quick Test
1. Open `index.html`
2. Click cell 1 (top-left) - X appears
3. Click cell 2 - O appears
4. Continue playing or click "New Game"

### Full Test
Run through the test checklist in `test.html`

### Browser Testing
Test in multiple browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 💾 File Sizes

- `index.html`: 2.5 KB
- `styles.css`: 5.6 KB
- `script.js`: 7.8 KB
- **Total**: ~16 KB (uncompressed)

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repo
3. Enable GitHub Pages in settings
4. Your game will be live at `https://username.github.io/repo-name/`

### Any Web Server
1. Upload all files to your server
2. Keep files in the same directory
3. Access via `https://yourdomain.com/index.html`

### Local Network
1. Run a local server (see Method B above)
2. Share your local IP address
3. Others can access on same network at `http://YOUR_IP:8000`

## 📚 Documentation

- **README.md** - Complete documentation
- **QUICKSTART.md** - Get started in 30 seconds
- **FEATURES.md** - Detailed feature list
- **PROJECT_SUMMARY.md** - Project overview
- **test.html** - Testing guide

## 🎓 Learning

This project demonstrates:
- ✅ HTML5 semantic elements
- ✅ CSS Grid & Flexbox
- ✅ CSS Variables & Animations
- ✅ JavaScript ES6+
- ✅ DOM manipulation
- ✅ Event handling
- ✅ localStorage API
- ✅ Responsive design
- ✅ Accessibility (ARIA)
- ✅ Mobile-first approach

## ⚡ Performance

- No external dependencies
- No network requests
- Instant loading
- Smooth 60fps animations
- Minimal memory usage

## ♿ Accessibility

- Screen reader compatible
- Keyboard navigable
- High contrast
- ARIA labels
- Focus indicators
- Reduced motion support

## 🎯 Next Steps

1. ✅ Open `index.html`
2. ✅ Read `QUICKSTART.md` for quick guide
3. ✅ Play a few games!
4. ✅ Check `FEATURES.md` for all features
5. ✅ Customize colors if desired

## 🎉 Enjoy!

You're all set! Open `index.html` and start playing Tic-Tac-Toe! 🎮

---

**Questions?** Check the other documentation files or open `test.html` for testing guidance.
