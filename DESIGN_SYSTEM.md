# EMDEX LABS - VISIONARY ARCHITECT DESIGN SYSTEM

> **CENTRAL CONTROL PANEL**: This document defines the visual language of the application.
> The aesthetic is **Dark, Technical, and Precision-Engineered**.

## 1. Color Palette (Dark Mode Default)

| Token Name | Hex Value | CSS Variable | Usage Description |
| :--- | :--- | :--- | :--- |
| **Base Black** | `#0a0a0b` | `--background` | Main page background. Deepest black for infinite depth. |
| **Pure White** | `#ffffff` | `--foreground` | Main text color, Headings. |
| **Zinc 400** | `#a1a1aa` | `--muted-foreground` | Secondary text, descriptions. Reduces eye strain. |
| **Electric Cyan** | `#00f5ff` | `--primary` | Main accents, active states, "Magnetic" interactions. |
| **Card Surface** | `rgba(255, 255, 255, 0.03)` | N/A (Utility) | Subtle background for Bento cards. |
| **Border Gradient** | `linear-gradient` | `--border-gradient` | From `#FFFFFF1A` (top-left) to `#FFFFFF00` (bottom-right). |

---

## 2. Typography

We use a precision font stack to convey technical authority:

*   **Headings**: `Geist Sans` (Variable)
    *   Weight: 600
    *   Letter Spacing: -0.02em
*   **Body**: `Inter`
    *   Weight: 400
    *   Line Height: 1.6
*   **Labels / Tech Data**: `JetBrains Mono`
    *   Size: 11px
    *   Case: UPPERCASE
    *   Tracking: 0.05em

---

## 3. Interactive Physics ("The Feel")

*   **Magnetic Buttons**: Buttons attract the cursor within a 20px range.
*   **Bento Lift**:
    *   Hover: `translateY(-4px)`
    *   Border Opacity: `0.1` -> `0.4`
    *   Shadow: Inner glow `0 0 20px rgba(0, 245, 255, 0.1)`
*   **Cursor Tracking**: A faint Cyan radial gradient follows the mouse globally.

---

## 4. UI/UX Micro-Specifications

### The "Linear" Border
Do not use heavy shadows for depth. Use valid border definition:
`border: 1px solid var(--border-color)` where border color is often a subtle gradient or low-opacity white.

### The "Noise" Texture
All pages must have a fixed background overlay of subtle noise (opacity 0.03) to simulate physical material.

---

**AI INSTRUCTION**: When generating new UI, ALWAYS reference this file. Adopt the "Visionary Architect" persona—methodical, crisp, and futuristic.
