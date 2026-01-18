# PROGRADE PATHFINDER - DESIGN SYSTEM SPECIFICATION

> **CENTRAL CONTROL PANEL**: This document defines the visual language of the application. 
> To make global changes, update the **CSS Variables** in `src/app/globals.css` based on the definitions below.

## 1. Color Palette (High-Contrast Theme)

| Token Name | Hex Value | CSS Variable | Usage Description |
| :--- | :--- | :--- | :--- |
| **Primary Blue** | `#0098fa` | `--primary` | Main actions, buttons, active states, high-visibility accents. |
| **Deep Navy** | `#0d1b2a` | `--foreground` | Main text color, Navbar background (scrolled), Footer background. |
| **Cool White** | `#f2faff` | `--background` | Main page background (Body). |
| **Warm Beige** | `#f1f1e6` | `--secondary` | Card surfaces, form containers, secondary backgrounds (to separate from page). |
| **Pure White** | `#ffffff` | `--primary-foreground` | Text on Primary Blue buttons. |

---

## 2. Semantic Token Mapping

When creating new components, use these semantic names instead of raw hex values:

### Surfaces
- **Page Background**: `bg-background` (Cool White)
- **Card/Container Surface**: `bg-secondary` (Warm Beige) — *Use this for all cards (Bento, Services, Forms) to ensure they pop against the white page.*
- **Header/Footer Surface**: `bg-foreground` (Deep Navy) — *For high-impact structural elements.*

### Typography
- **Primary Text**: `text-foreground` (Deep Navy) — *High contrast against both Cool White and Warm Beige.*
- **Inverted Text**: `text-background` or `text-white` — *Used on Deep Navy or Primary Blue backgrounds.*
- **Accent Text**: `text-primary` (Primary Blue) — *For keywords, spans, and active links.*

### Interactive Elements
- **Primary Button**: 
  - Bg: `bg-primary`
  - Text: `text-primary-foreground` (White)
  - Radius: `rounded-xl`
- **Secondary Button**: 
  - Bg: `bg-transparent`
  - Border: `border border-foreground`
  - Text: `text-foreground`

---

## 3. Tailwind Configuration Notes

This project uses **Tailwind CSS v4**. 
The theme is controlled dynamically via CSS variables in `src/app/globals.css`.

**Global Updates:**
- To change the **Primary Color** everywhere: Update `--primary` in `src/app/globals.css`.
- To change the **Background** across the app: Update `--background` in `src/app/globals.css`.

---

## 4. Iconography
- **Library**: `lucide-react`
- **Default Color**: `text-primary` (Blue) on Semantic Cards.
- **Stroke Width**: `1.5` or `2` for clarity.

---

**AI INSTRUCTION**: When generating new UI, ALWAYS reference this file. derived new colors only if absolutely necessary for "shades", otherwise stick to the Core Palette.
