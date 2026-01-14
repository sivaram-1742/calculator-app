# Calculator Testing Guide

## Manual Test Cases

### Test 1: Basic Addition
**Steps:**
1. Open `index.html` in a browser
2. Click: `5` → `+` → `3` → `=`

**Expected Result:** Display shows `8`

---

### Test 2: Basic Subtraction
**Steps:**
1. Click `AC` to clear
2. Click: `10` → `-` → `4` → `=`

**Expected Result:** Display shows `6`

---

### Test 3: Basic Multiplication
**Steps:**
1. Click `AC` to clear
2. Click: `7` → `×` → `8` → `=`

**Expected Result:** Display shows `56`

---

### Test 4: Basic Division
**Steps:**
1. Click `AC` to clear
2. Click: `20` → `÷` → `4` → `=`

**Expected Result:** Display shows `5`

---

### Test 5: Division by Zero
**Steps:**
1. Click `AC` to clear
2. Click: `5` → `÷` → `0` → `=`

**Expected Result:**
- Error message appears: "Cannot divide by zero"
- Calculator resets to `0`
- Error message disappears after 3 seconds

---

### Test 6: Decimal Numbers
**Steps:**
1. Click `AC` to clear
2. Click: `3` → `.` → `5` → `+` → `2` → `.` → `5` → `=`

**Expected Result:** Display shows `6`

---

### Test 7: Prevent Multiple Decimals
**Steps:**
1. Click `AC` to clear
2. Click: `3` → `.` → `1` → `.` → `4`

**Expected Result:** Display shows `3.14` (second decimal point ignored)

---

### Test 8: Chain Calculations
**Steps:**
1. Click `AC` to clear
2. Click: `5` → `+` → `3` → `-` → `2` → `=`

**Expected Result:**
- After clicking `-`: Display shows `8` (5+3)
- After clicking `=`: Display shows `6` (8-2)

---

### Test 9: Delete Function
**Steps:**
1. Click `AC` to clear
2. Click: `1` → `2` → `3` → `4` → `5`
3. Click `DEL` twice

**Expected Result:** Display shows `123`

---

### Test 10: Keyboard Input
**Steps:**
1. Press `Escape` on keyboard
2. Type: `9` → `*` → `7` → `Enter`

**Expected Result:** Display shows `63`

---

### Test 11: Large Numbers
**Steps:**
1. Click `AC` to clear
2. Click: `9` → `9` → `9` → `9` → `9` → `9` → `9` → `×` → `9` → `9` → `9` → `9` → `9` → `9` → `=`

**Expected Result:** Display shows result in scientific notation or formatted with thousand separators

---

### Test 12: Floating Point Precision
**Steps:**
1. Click `AC` to clear
2. Click: `0` → `.` → `1` → `+` → `0` → `.` → `2` → `=`

**Expected Result:** Display shows `0.3` (not 0.30000000000000004)

---

### Test 13: Leading Zero Handling
**Steps:**
1. Click `AC` to clear
2. Click: `0` → `5`

**Expected Result:** Display shows `5` (leading zero removed)

---

### Test 14: Decimal Starting with Zero
**Steps:**
1. Click `AC` to clear
2. Click: `0` → `.` → `5`

**Expected Result:** Display shows `0.5`

---

### Test 15: Operation on Result
**Steps:**
1. Click `AC` to clear
2. Click: `5` → `+` → `5` → `=` (result: 10)
3. Click: `×` → `2` → `=`

**Expected Result:** Display shows `20` (using previous result)

---

## Keyboard Testing

### Keyboard Shortcuts to Test

| Input | Expected Action |
|-------|----------------|
| `0-9` | Enter digits |
| `.` | Enter decimal |
| `+` | Addition operator |
| `-` | Subtraction operator |
| `*` | Multiplication operator |
| `/` | Division operator |
| `Enter` | Calculate result |
| `=` | Calculate result |
| `Escape` | Clear all |
| `c` or `C` | Clear all |
| `Backspace` | Delete last digit |
| `Delete` | Delete last digit |

---

## Accessibility Testing

### Screen Reader Testing
1. Enable screen reader (NVDA, JAWS, or VoiceOver)
2. Tab through buttons
3. Verify all buttons announce their labels correctly
4. Perform calculation and verify display updates are announced

### Keyboard Navigation Testing
1. Tab through all interactive elements
2. Verify focus indicators are visible
3. Test all operations using only keyboard
4. Verify no keyboard traps exist

---

## Responsive Design Testing

### Desktop (> 480px)
- Open in desktop browser
- Verify calculator is centered
- Verify buttons are appropriately sized
- Check hover states work

### Tablet (≤ 480px)
- Resize browser to 480px width
- Verify responsive styles apply
- Check touch targets are adequate

### Mobile (≤ 360px)
- Resize browser to 360px width
- Verify compact layout
- Ensure all buttons are accessible
- Test touch interactions

---

## Browser Compatibility Testing

Test the calculator in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Edge Cases to Verify

### ✅ Mathematical Edge Cases
- [x] Division by zero handled
- [x] Very large numbers (scientific notation)
- [x] Very small numbers (scientific notation)
- [x] Floating point precision
- [x] Negative results
- [x] Multiple decimal points prevented

### ✅ Input Edge Cases
- [x] Leading zeros handled
- [x] Decimal-only input (e.g., `.5`)
- [x] Empty operation prevented
- [x] Multiple operations in sequence
- [x] Operation after result

### ✅ UI Edge Cases
- [x] Error messages auto-dismiss
- [x] Display updates immediately
- [x] Previous operand shows correctly
- [x] Buttons provide visual feedback
- [x] Keyboard and mouse both work

---

## Performance Testing

### Load Time
- Measure initial page load time
- **Target:** < 1 second on normal connection

### Interaction Response
- Click button and measure response time
- **Target:** Instant (< 100ms perceived)

### Memory Usage
- Open developer tools
- Monitor memory during calculations
- **Target:** No memory leaks

---

## Bug Reporting Template

If you find a bug, please report it with:

```
**Bug Description:**
[Clear description of the issue]

**Steps to Reproduce:**
1. [First step]
2. [Second step]
3. [etc.]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happened]

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, iPhone 14]

**Screenshots:**
[If applicable]
```

---

## Automated Testing (Future Enhancement)

Consider adding:
- Unit tests for Calculator class methods
- Integration tests for user interactions
- Visual regression tests
- Accessibility audit automation

Example frameworks:
- Jest for unit testing
- Playwright or Cypress for E2E testing
- axe-core for accessibility testing

---

## Test Results Template

### Test Session: [Date]
**Tester:** [Name]
**Browser:** [Browser & Version]
**Device:** [Device Type]

| Test # | Test Name | Result | Notes |
|--------|-----------|--------|-------|
| 1 | Basic Addition | ✅ Pass | |
| 2 | Basic Subtraction | ✅ Pass | |
| 3 | Basic Multiplication | ✅ Pass | |
| ... | ... | ... | ... |

**Overall Status:** [Pass/Fail]
**Issues Found:** [Number]
**Critical Issues:** [Number]
