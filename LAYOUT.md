# Calculator Layout & Design

## Visual Structure

```
┌─────────────────────────────────────┐
│         CALCULATOR APP              │
│                                     │
│  ┌───────────────────────────────┐  │
│  │         Previous: 5 +         │  │
│  │         Current:  3           │  │
│  │          DISPLAY              │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌────┬────┬────┬────┐             │
│  │ AC │DEL │ ÷  │ ×  │             │
│  ├────┼────┼────┼────┤             │
│  │ 7  │ 8  │ 9  │ −  │             │
│  ├────┼────┼────┼────┤             │
│  │ 4  │ 5  │ 6  │ +  │             │
│  ├────┼────┼────┼────┤             │
│  │ 1  │ 2  │ 3  │    │             │
│  ├────┴────┼────┤ =  │             │
│  │    0    │ .  │    │             │
│  └─────────┴────┴────┘             │
│                                     │
└─────────────────────────────────────┘
```

## Button Grid Layout

### Grid Structure: 4 columns × 5 rows

**Row 1: Function & Division**
```
┌────────┬────────┬────────┬────────┐
│   AC   │  DEL   │   ÷    │   ×    │
│ Clear  │ Delete │ Divide │Multiply│
│ Purple │ Purple │  Red   │  Red   │
└────────┴────────┴────────┴────────┘
```

**Row 2: Numbers 7-9 & Subtraction**
```
┌────────┬────────┬────────┬────────┐
│   7    │   8    │   9    │   −    │
│  Blue  │  Blue  │  Blue  │  Red   │
└────────┴────────┴────────┴────────┘
```

**Row 3: Numbers 4-6 & Addition**
```
┌────────┬────────┬────────┬────────┐
│   4    │   5    │   6    │   +    │
│  Blue  │  Blue  │  Blue  │  Red   │
└────────┴────────┴────────┴────────┘
```

**Row 4-5: Numbers 1-3, 0, Decimal & Equals**
```
┌────────┬────────┬────────┬────────┐
│   1    │   2    │   3    │        │
│  Blue  │  Blue  │  Blue  │   =    │
├────────┴────────┼────────┤        │
│        0        │   .    │ Green  │
│      Blue       │  Blue  │        │
└─────────────────┴────────┴────────┘
```

## Color Scheme

### Button Types

| Button Type | Color | Examples |
|------------|-------|----------|
| Numbers | Dark Blue | 0-9, . |
| Operators | Red | +, −, ×, ÷ |
| Functions | Purple | AC, DEL |
| Equals | Green | = |

### Color Palette (Dark Theme)

```css
Background:     #1a1a2e → #16213e (gradient)
Calculator:     #0f3460
Display:        #0a2540
Numbers:        #1e3a5f
Operators:      #e94560
Functions:      #533483
Equals:         #16a085
Text:           #ffffff
```

## Display Components

### Two-Line Display

**Line 1: Previous Operation**
```
┌─────────────────────────────────┐
│  5 +                            │  ← Shows: previous number + operator
│                          (Small)│
└─────────────────────────────────┘
```

**Line 2: Current Input**
```
┌─────────────────────────────────┐
│                              3  │  ← Shows: current number
│                         (Large) │
└─────────────────────────────────┘
```

## Responsive Breakpoints

### Desktop (481px+)
- Max width: 400px
- Button padding: 24px
- Font size: 1.5rem
- Display: 2.5rem

### Mobile (360-480px)
- Full width with margin
- Button padding: 20px
- Font size: 1.3rem
- Display: 2rem

### Small Mobile (<360px)
- Minimal padding
- Button padding: 16px
- Font size: 1.2rem
- Display: 1.8rem

## Interaction States

### Button States

**Normal**
```
┌────────┐
│   5    │  ← Default appearance
└────────┘
```

**Hover** (Desktop)
```
┌────────┐
│   5    │  ← Lifted 2px, larger shadow
└─╨──╨───┘
```

**Active** (Pressed)
```
┌────────┐
│   5    │  ← Pressed down, smaller shadow
└────────┘
```

**Focus** (Keyboard)
```
╔════════╗
║   5    ║  ← Outline ring for accessibility
╚════════╝
```

**Operator Selected**
```
┌────────┐
│   +    │  ← Brighter color, inset shadow
└────────┘
```

## Typography

### Font Families
```
Primary: -apple-system, BlinkMacSystemFont,
         'Segoe UI', Roboto, Oxygen, Ubuntu
```

### Font Sizes
- Display Current: 2.5rem (40px)
- Display Previous: 1.2rem (19px)
- Buttons: 1.5rem (24px)
- Equals Button: 2rem (32px)

### Font Weights
- Display: 600 (Semi-Bold)
- Buttons: 600 (Semi-Bold)

## Spacing & Sizing

### Dimensions
```
Calculator:    400px max width
Display:       100px min height
Button:        ~60px height (auto grid)
Gap:           12px between buttons
Padding:       24px around calculator
Radius:        16px calculator
               12px display
               8px buttons
```

### Grid Layout
```css
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.btn-zero {
    grid-column: span 2;  /* Takes 2 columns */
}

.btn-equals {
    grid-row: span 2;     /* Takes 2 rows */
}
```

## Accessibility Features

### ARIA Labels
```html
<button aria-label="Seven">7</button>
<button aria-label="Add">+</button>
<button aria-label="Clear">AC</button>
```

### Live Regions
```html
<div aria-live="polite" aria-atomic="true">
    Display content
</div>
```

### Focus Indicators
- 3px outline in green color
- 2px offset from button
- Only visible when using keyboard

### Semantic Structure
```html
<main>                    ← Main content
  <div role="application"> ← Calculator app
    <div>Display</div>     ← Output area
    <div>Buttons</div>     ← Input area
  </div>
</main>
```

## Animation & Transitions

### Button Hover
```css
transform: translateY(-2px);
transition: all 0.2s ease;
box-shadow: 0 4px 8px rgba(0,0,0,0.3);
```

### Button Press
```css
transform: translateY(0);
box-shadow: 0 2px 4px rgba(0,0,0,0.2);
```

### Reduced Motion
For users with motion sensitivity:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Shadow System

```css
--shadow-sm: 0 2px 4px rgba(0,0,0,0.2);   /* Buttons normal */
--shadow-md: 0 4px 8px rgba(0,0,0,0.3);   /* Buttons hover */
--shadow-lg: 0 8px 16px rgba(0,0,0,0.4);  /* Calculator */
```

## Border Radius System

```css
--radius-sm: 8px;   /* Buttons */
--radius-md: 12px;  /* Display */
--radius-lg: 16px;  /* Calculator */
```

## Layout Hierarchy

```
body (flex center)
  └── main.calculator-container (max-width wrapper)
      └── div.calculator (card with padding)
          ├── div.display (output area)
          │   ├── div.display-previous
          │   └── div.display-current
          └── div.buttons (grid layout)
              ├── button.btn.btn-function (AC, DEL)
              ├── button.btn.btn-operator (+, -, ×, ÷)
              ├── button.btn.btn-number (0-9, .)
              └── button.btn.btn-equals (=)
```

## Mobile Optimizations

### Touch Targets
- Minimum 48×48px for all buttons
- Adequate spacing (12px) between buttons
- No accidental touches

### Viewport Meta
```html
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">
```

### Tap Highlight
```css
-webkit-tap-highlight-color: transparent;
```

## Print Styles (Not implemented)

For future enhancement, consider:
- Hide buttons in print
- Show only display
- Black and white theme
- Larger text for readability

---

**Note**: This layout follows modern UI/UX principles including:
- ✅ Clear visual hierarchy
- ✅ Consistent spacing
- ✅ Adequate touch targets
- ✅ Accessible color contrast
- ✅ Responsive design
- ✅ Smooth interactions
