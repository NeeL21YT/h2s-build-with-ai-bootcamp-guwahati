---
name: Orbital Precision
colors:
  surface: '#101221'
  surface-dim: '#101221'
  surface-bright: '#363848'
  surface-container-lowest: '#0b0d1b'
  surface-container-low: '#191b29'
  surface-container: '#1d1f2d'
  surface-container-high: '#272938'
  surface-container-highest: '#323443'
  on-surface: '#e1e1f5'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e1e1f5'
  inverse-on-surface: '#2e2f3f'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#a855f7'
  primary-container: '#b76dff'
  on-primary: '#490080'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#38bdf8'
  secondary-container: '#00a6e0'
  on-secondary: '#00354a'
  on-secondary-container: '#00374d'
  tertiary: '#c084fc'
  tertiary-container: '#b175ec'
  on-tertiary: '#490081'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb8ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#62259b'
  background: '#101221'
  on-background: '#e1e1f5'
  surface-variant: '#323443'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

# Design System: Orbital Precision (LaunchPad)

## 1. Brand & Aesthetic Overview
The **LaunchPad** design system (*Orbital Precision*) establishes a futuristic, high-velocity aesthetic tailored for space-tech engineering and infrastructure platforms. It merges deep space aesthetics with enterprise-grade utility, projecting operational supremacy, precision, and confidence.

The visual strategy relies on a hybrid of **dark-mode minimalism** and **controlled glassmorphism**. Interfaces emerge from deep cosmic voids with luminous neon violet edge lighting and sharp cyan telemetry indicators. The overall mood balances the rigor of mission control dashboards with the cutting-edge luxury of advanced commercial aerospace.

---

## 2. Color Palette

### Core Brand & Accents
| Role | Color Hex | Description & Usage |
| :--- | :--- | :--- |
| **Primary** | `#A855F7` | Electric neon violet / purple for primary CTAs, active highlights, and key brand anchors |
| **Primary Container** | `#B76DFF` | Elevated primary surfaces and accent containers |
| **Secondary** | `#38BDF8` | Cyan for live telemetry, real-time data metrics, signal indicators, and active badges |
| **Secondary Container** | `#00A6E0` | Elevated secondary telemetry panels |
| **Tertiary** | `#C084FC` | Soft lavender / violet for radiant highlights, hovered borders, and ambient light sources |
| **Tertiary Container** | `#B175EC` | Elevated tertiary badges and highlights |
| **Error / Alert** | `#FFB4AB` | Warnings, abort triggers, and alert status indicators |
| **Error Container** | `#93000A` | Elevated warning/error pill and modal containers |

### Canvas & Surface Hierarchy
| Level / Token | Color Hex / RGBA | Description |
| :--- | :--- | :--- |
| **Canvas Lowest** (`surface-container-lowest`) | `#0B0D1B` | Deep cosmic void background |
| **Background / Surface** (`surface`) | `#101221` | Base application canvas |
| **Card Surface** (`surface-container`) | `#1D1F2D` / `rgba(15, 18, 38, 0.7)` | Glassmorphic card fill with backdrop blur |
| **Elevated Overlays** (`surface-container-high`) | `#272938` / `#161A36` | Floating command panels, dropdowns, and modals |
| **Highest Surface** (`surface-container-highest`) | `#323443` | Top-level elevated interactive states |
| **Ghost Borders** (`outline-variant`) | `rgba(168, 85, 247, 0.15)` | Subtle border fading to `rgba(255, 255, 255, 0.08)` |

### Text & Contrast Hierarchy
| Token | Color Hex | Description |
| :--- | :--- | :--- |
| **Primary Text** (`on-surface` / High-Contrast) | `#F8FAFC` / `#E1E1F5` | Primary titles, headlines, and critical telemetry values |
| **Secondary Text** (`on-surface-variant`) | `#94A3B8` / `#CFC2D6` | Body text, descriptions, and feature specifications |
| **Muted Text / Outlines** (`outline`) | `#64748B` / `#988D9F` | Dividers, disabled states, and metadata labels |

---

## 3. Typography

The system utilizes three specialized Google Fonts:
1. **Headlines (`Sora`)**: Geometric, tech-forward, and wide, delivering high-impact technological weight to headings and stats.
2. **Body (`Plus Jakarta Sans`)**: Highly legible, humanistic sans-serif engineered for reading complex technical specifications and product features without fatigue.
3. **Labels & Telemetry (`JetBrains Mono`)**: Strict, monospaced notation for telemetry indicators, pricing tier subheads, badges, terminal code snippets, and coordinate tags.

### Type Scale
| Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **display-xl** | Sora | 64px | 700 (Bold) | 72px | `-0.03em` |
| **display-xl-mobile** | Sora | 40px | 700 (Bold) | 48px | `-0.02em` |
| **headline-lg** | Sora | 44px | 600 (SemiBold) | 52px | `-0.02em` |
| **headline-lg-mobile** | Sora | 32px | 600 (SemiBold) | 40px | `-0.01em` |
| **headline-md** | Sora | 28px | 600 (SemiBold) | 36px | `-0.01em` |
| **headline-sm** | Sora | 20px | 600 (SemiBold) | 28px | Normal |
| **body-lg** | Plus Jakarta Sans | 18px | 400 (Regular) | 28px | Normal |
| **body-md** | Plus Jakarta Sans | 15px | 400 (Regular) | 24px | Normal |
| **body-sm** | Plus Jakarta Sans | 13px | 400 (Regular) | 20px | Normal |
| **label-md** | JetBrains Mono | 12px | 500 (Medium) | 16px | `0.06em` |
| **label-sm** | JetBrains Mono | 10px | 600 (SemiBold) | 14px | `0.08em` |

---

## 4. Layout, Spacing & Breakpoints

- **Max Container Width**: `1280px`
- **12-Column Responsive Fluid Grid**
- **Baseline Spacing Scale**: Multiplier of 8px (0.25rem = 4px)

### Breakpoints
- **Desktop (`1024px+`)**: 12 columns, 24px gutters (`1.5rem`), 32px canvas margins (`2rem`)
- **Tablet (`768px - 1023px`)**: 8 columns, 16px gutters (`1rem`), 24px canvas margins (`1.5rem`)
- **Mobile (`<768px`)**: 4 columns, 16px gutters (`1rem`), 20px canvas margins (`1.25rem`)

### Spacing Tokens
- `space-xs`: `0.25rem` (4px)
- `space-sm`: `0.5rem` (8px)
- `space-md`: `1rem` (16px)
- `space-lg`: `1.5rem` (24px)
- `space-xl`: `2.5rem` (40px)
- **Section Separators**: Generous `5rem` to `8rem` padding between landing sections to evoke the vastness of space.

---

## 5. Elevation & Depth (Glassmorphism)

Rather than pure drop shadows, elevation is achieved with layered translucent planes and neon backlighting:

- **Level 0 (Deep Ground)**: Solid `#0B0D1B` background with subtle starfields or SVG geometric coordinates.
- **Level 1 (Glassmorphic Cards)**:
  - Background: `rgba(15, 18, 38, 0.7)`
  - Border: `1px solid` linear gradient (`linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(56, 189, 248, 0.05) 50%, rgba(255, 255, 255, 0.03))`)
  - Backdrop Blur: `16px`
- **Level 2 (Hover & Active States)**:
  - Border Illumination: `rgba(192, 132, 252, 0.6)`
  - Ambient Bloom: `box-shadow: 0 0 24px -4px rgba(168, 85, 247, 0.25)`
- **Level 3 (Modals & Command Overlays)**:
  - Surface: `#161A36` at 90% opacity
  - Backdrop Blur: `24px`
  - Electric Glow: `box-shadow: 0 0 40px -8px rgba(147, 51, 234, 0.35)`

---

## 6. Shapes & Border Radii
- **`sm` (`4px` / `0.25rem`)**: Inner micro-tags and table borders
- **`DEFAULT` (`8px` / `0.5rem`)**: Base roundedness for inputs, chips, and table cells
- **`md` (`12px` / `0.75rem`)**: Interactive controls and sub-panels
- **`lg` (`16px` / `1rem`)**: Primary feature cards, launch pads, and hero glass planes
- **`xl` (`24px` / `1.5rem`)**: Elevated container modals
- **`full` (`9999px`)**: Interactive telemetry pill badges and status indicators

---

## 7. Component Styling Guidelines

- **Primary Buttons**:
  - Background: `linear-gradient(135deg, #A855F7 0%, #9333EA 100%)`
  - Top Inset Border: `1px solid rgba(255, 255, 255, 0.2)`
  - Hover Effect: `box-shadow: 0 0 20px rgba(168, 85, 247, 0.4)`
- **Secondary / Ghost Buttons**:
  - Background: `rgba(22, 26, 54, 0.6)`
  - Border: `1px solid rgba(168, 85, 247, 0.3)`
  - Hover: Text and border transition to electric cyan (`#38BDF8`)
- **Cards**:
  - Frosted glass surface with subtle radial glow reflecting primary violet or cyan accents.
  - Border: `1px solid rgba(255, 255, 255, 0.08)` transitioning to `#A855F7` on focus/hover.
- **Pricing Tables**:
  - Segmented grid format with crisp header tags.
  - Recommended tier features an exclusive neon-framed border with purple drop-glow (`box-shadow: 0 0 32px -4px rgba(168, 85, 247, 0.3)`) and a `POPULAR LAUNCH` badge.
- **Chips & Telemetry Badges**:
  - Monospaced typography with a live pulsing dot indicator (cyan `#38BDF8` or emerald).
  - Background: `rgba(56, 189, 248, 0.1)`, 1px border.
- **Input Fields**:
  - Background: `rgba(11, 13, 27, 0.8)` with `1px` border (`#161A36`).
  - Focus Ring: `#38BDF8` with `box-shadow: 0 0 12px rgba(56, 189, 248, 0.25)`.
