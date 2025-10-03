:root {
  /* Primitive Color Tokens */
  --color-white: rgba(255, 255, 255, 1);
  --color-black: rgba(0, 0, 0, 1);
  --color-cream-50: rgba(252, 252, 249, 1);
  --color-cream-100: rgba(255, 255, 253, 1);
  --color-gray-200: rgba(245, 245, 245, 1);
  --color-gray-300: rgba(167, 169, 169, 1);
  --color-gray-400: rgba(119, 124, 124, 1);
  --color-slate-500: rgba(98, 108, 113, 1);
  --color-brown-600: rgba(94, 82, 64, 1);
  --color-charcoal-700: rgba(31, 33, 33, 1);
  --color-charcoal-800: rgba(38, 40, 40, 1);
  --color-slate-900: rgba(19, 52, 59, 1);
  --color-teal-300: rgba(50, 184, 198, 1);
  --color-teal-400: rgba(45, 166, 178, 1);
  --color-teal-500: rgba(33, 128, 141, 1);
  --color-teal-600: rgba(29, 116, 128, 1);
  --color-teal-700: rgba(26, 104, 115, 1);
  --color-teal-800: rgba(41, 150, 161, 1);
  --color-red-400: rgba(255, 84, 89, 1);
  --color-red-500: rgba(192, 21, 47, 1);
  --color-orange-400: rgba(230, 129, 97, 1);
  --color-orange-500: rgba(168, 75, 47, 1);

  /* RGB versions for opacity control */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;
  --color-slate-500-rgb: 98, 108, 113;
  --color-red-500-rgb: 192, 21, 47;
  --color-red-400-rgb: 255, 84, 89;
  --color-orange-500-rgb: 168, 75, 47;
  --color-orange-400-rgb: 230, 129, 97;

  /* Background color tokens (Light Mode) */
  --color-bg-1: rgba(59, 130, 246, 0.08); /* Light blue */
  --color-bg-2: rgba(245, 158, 11, 0.08); /* Light yellow */
  --color-bg-3: rgba(34, 197, 94, 0.08); /* Light green */
  --color-bg-4: rgba(239, 68, 68, 0.08); /* Light red */
  --color-bg-5: rgba(147, 51, 234, 0.08); /* Light purple */
  --color-bg-6: rgba(249, 115, 22, 0.08); /* Light orange */
  --color-bg-7: rgba(236, 72, 153, 0.08); /* Light pink */
  --color-bg-8: rgba(6, 182, 212, 0.08); /* Light cyan */

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
  --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);

  /* Common style patterns */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for opacity control */
  --color-success-rgb: 33, 128, 141;
  --color-error-rgb: 192, 21, 47;
  --color-warning-rgb: 168, 75, 47;
  --color-info-rgb: 98, 108, 113;

  /* Typography */
  --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  --font-size-4xl: 30px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
  --font-weight-bold: 600;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --letter-spacing-tight: -0.01em;

  /* Spacing */
  --space-0: 0;
  --space-1: 1px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-base: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04),
    0 2px 4px -1px rgba(0, 0, 0, 0.02);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04),
    0 4px 6px -2px rgba(0, 0, 0, 0.02);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}

/* Dark mode colors */
@media (prefers-color-scheme: dark) {
  :root {
    /* RGB versions for opacity control (Dark Mode) */
    --color-gray-400-rgb: 119, 124, 124;
    --color-teal-300-rgb: 50, 184, 198;
    --color-gray-300-rgb: 167, 169, 169;
    --color-gray-200-rgb: 245, 245, 245;

    /* Background color tokens (Dark Mode) */
    --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
    --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
    --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
    --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
    --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
    --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
    --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
    --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

    /* Semantic Color Tokens (Dark Mode) */
    --color-background: var(--color-charcoal-700);
    --color-surface: var(--color-charcoal-800);
    --color-text: var(--color-gray-200);
    --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
    --color-primary: var(--color-teal-300);
    --color-primary-hover: var(--color-teal-400);
    --color-primary-active: var(--color-teal-800);
    --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
    --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
    --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
    --color-border: rgba(var(--color-gray-400-rgb), 0.3);
    --color-error: var(--color-red-400);
    --color-success: var(--color-teal-300);
    --color-warning: var(--color-orange-400);
    --color-info: var(--color-gray-300);
    --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
    --color-btn-primary-text: var(--color-slate-900);
    --color-card-border: rgba(var(--color-gray-400-rgb), 0.2);
    --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
    --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    --button-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
    --color-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
    --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);

    /* Common style patterns - updated for dark mode */
    --focus-ring: 0 0 0 3px var(--color-focus-ring);
    --focus-outline: 2px solid var(--color-primary);
    --status-bg-opacity: 0.15;
    --status-border-opacity: 0.25;
    --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

    /* RGB versions for dark mode */
    --color-success-rgb: var(--color-teal-300-rgb);
    --color-error-rgb: var(--color-red-400-rgb);
    --color-warning-rgb: var(--color-orange-400-rgb);
    --color-info-rgb: var(--color-gray-300-rgb);
  }
}

/* Data attribute for manual theme switching */
[data-color-scheme="dark"] {
  /* RGB versions for opacity control (dark mode) */
  --color-gray-400-rgb: 119, 124, 124;
  --color-teal-300-rgb: 50, 184, 198;
  --color-gray-300-rgb: 167, 169, 169;
  --color-gray-200-rgb: 245, 245, 245;

  /* Colorful background palette - Dark Mode */
  --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
  --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
  --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
  --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
  --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
  --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
  --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
  --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

  /* Semantic Color Tokens (Dark Mode) */
  --color-background: var(--color-charcoal-700);
  --color-surface: var(--color-charcoal-800);
  --color-text: var(--color-gray-200);
  --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
  --color-primary: var(--color-teal-300);
  --color-primary-hover: var(--color-teal-400);
  --color-primary-active: var(--color-teal-800);
  --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
  --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
  --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
  --color-border: rgba(var(--color-gray-400-rgb), 0.3);
  --color-error: var(--color-red-400);
  --color-success: var(--color-teal-300);
  --color-warning: var(--color-orange-400);
  --color-info: var(--color-gray-300);
  --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
  --color-btn-primary-text: var(--color-slate-900);
  --color-card-border: rgba(var(--color-gray-400-rgb), 0.15);
  --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  --color-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
  --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);

  /* Common style patterns - updated for dark mode */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for dark mode */
  --color-success-rgb: var(--color-teal-300-rgb);
  --color-error-rgb: var(--color-red-400-rgb);
  --color-warning-rgb: var(--color-orange-400-rgb);
  --color-info-rgb: var(--color-gray-300-rgb);
}

[data-color-scheme="light"] {
  /* RGB versions for opacity control (light mode) */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);

  /* RGB versions for light mode */
  --color-success-rgb: var(--color-teal-500-rgb);
  --color-error-rgb: var(--color-red-500-rgb);
  --color-warning-rgb: var(--color-orange-500-rgb);
  --color-info-rgb: var(--color-slate-500-rgb);
}

/* Base styles */
html {
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
}

h1 {
  font-size: var(--font-size-4xl);
}
h2 {
  font-size: var(--font-size-3xl);
}
h3 {
  font-size: var(--font-size-2xl);
}
h4 {
  font-size: var(--font-size-xl);
}
h5 {
  font-size: var(--font-size-lg);
}
h6 {
  font-size: var(--font-size-md);
}

p {
  margin: 0 0 var(--space-16) 0;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-standard);
}

a:hover {
  color: var(--color-primary-hover);
}

code,
pre {
  font-family: var(--font-family-mono);
  font-size: calc(var(--font-size-base) * 0.95);
  background-color: var(--color-secondary);
  border-radius: var(--radius-sm);
}

code {
  padding: var(--space-1) var(--space-4);
}

pre {
  padding: var(--space-16);
  margin: var(--space-16) 0;
  overflow: auto;
  border: 1px solid var(--color-border);
}

pre code {
  background: none;
  padding: 0;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-standard);
  border: none;
  text-decoration: none;
  position: relative;
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-btn-primary-text);
}

.btn--primary:hover {
  background: var(--color-primary-hover);
}

.btn--primary:active {
  background: var(--color-primary-active);
}

.btn--secondary {
  background: var(--color-secondary);
  color: var(--color-text);
}

.btn--secondary:hover {
  background: var(--color-secondary-hover);
}

.btn--secondary:active {
  background: var(--color-secondary-active);
}

.btn--outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn--outline:hover {
  background: var(--color-secondary);
}

.btn--sm {
  padding: var(--space-4) var(--space-12);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-sm);
}

.btn--lg {
  padding: var(--space-10) var(--space-20);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-md);
}

.btn--full-width {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Form elements */
.form-control {
  display: block;
  width: 100%;
  padding: var(--space-8) var(--space-12);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  transition: border-color var(--duration-fast) var(--ease-standard),
    box-shadow var(--duration-fast) var(--ease-standard);
}

textarea.form-control {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
}

select.form-control {
  padding: var(--space-8) var(--space-12);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: var(--select-caret-light);
  background-repeat: no-repeat;
  background-position: right var(--space-12) center;
  background-size: 16px;
  padding-right: var(--space-32);
}

/* Add a dark mode specific caret */
@media (prefers-color-scheme: dark) {
  select.form-control {
    background-image: var(--select-caret-dark);
  }
}

/* Also handle data-color-scheme */
[data-color-scheme="dark"] select.form-control {
  background-image: var(--select-caret-dark);
}

[data-color-scheme="light"] select.form-control {
  background-image: var(--select-caret-light);
}

.form-control:focus {
  border-color: var(--color-primary);
  outline: var(--focus-outline);
}

.form-label {
  display: block;
  margin-bottom: var(--space-8);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.form-group {
  margin-bottom: var(--space-16);
}

/* Card component */
.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-card-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--duration-normal) var(--ease-standard);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card__body {
  padding: var(--space-16);
}

.card__header,
.card__footer {
  padding: var(--space-16);
  border-bottom: 1px solid var(--color-card-border-inner);
}

/* Status indicators - simplified with CSS variables */
.status {
  display: inline-flex;
  align-items: center;
  padding: var(--space-6) var(--space-12);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.status--success {
  background-color: rgba(
    var(--color-success-rgb, 33, 128, 141),
    var(--status-bg-opacity)
  );
  color: var(--color-success);
  border: 1px solid
    rgba(var(--color-success-rgb, 33, 128, 141), var(--status-border-opacity));
}

.status--error {
  background-color: rgba(
    var(--color-error-rgb, 192, 21, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-error);
  border: 1px solid
    rgba(var(--color-error-rgb, 192, 21, 47), var(--status-border-opacity));
}

.status--warning {
  background-color: rgba(
    var(--color-warning-rgb, 168, 75, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-warning);
  border: 1px solid
    rgba(var(--color-warning-rgb, 168, 75, 47), var(--status-border-opacity));
}

.status--info {
  background-color: rgba(
    var(--color-info-rgb, 98, 108, 113),
    var(--status-bg-opacity)
  );
  color: var(--color-info);
  border: 1px solid
    rgba(var(--color-info-rgb, 98, 108, 113), var(--status-border-opacity));
}

/* Container layout */
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--space-16);
  padding-left: var(--space-16);
}

@media (min-width: 640px) {
  .container {
    max-width: var(--container-sm);
  }
}
@media (min-width: 768px) {
  .container {
    max-width: var(--container-md);
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: var(--container-lg);
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: var(--container-xl);
  }
}

/* Utility classes */
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-4 {
  gap: var(--space-4);
}
.gap-8 {
  gap: var(--space-8);
}
.gap-16 {
  gap: var(--space-16);
}

.m-0 {
  margin: 0;
}
.mt-8 {
  margin-top: var(--space-8);
}
.mb-8 {
  margin-bottom: var(--space-8);
}
.mx-8 {
  margin-left: var(--space-8);
  margin-right: var(--space-8);
}
.my-8 {
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
}

.p-0 {
  padding: 0;
}
.py-8 {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}
.px-8 {
  padding-left: var(--space-8);
  padding-right: var(--space-8);
}
.py-16 {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}
.px-16 {
  padding-left: var(--space-16);
  padding-right: var(--space-16);
}

.block {
  display: block;
}
.hidden {
  display: none;
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

:focus-visible {
  outline: var(--focus-outline);
  outline-offset: 2px;
}

/* Dark mode specifics */
[data-color-scheme="dark"] .btn--outline {
  border: 1px solid var(--color-border-secondary);
}

@font-face {
  font-family: 'FKGroteskNeue';
  src: url('https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2')
    format('woff2');
}

/* END PERPLEXITY DESIGN SYSTEM */
/* Enhanced Color Psychology and Design System Integration */
:root {
    /* Custom enhancements for better color psychology */
    --font-family-primary: 'Inter', var(--font-family-base);
    
    /* Enhanced gradients using available colors */
    --hero-gradient-primary: var(--color-bg-1);
    --hero-gradient-secondary: var(--color-bg-3);
    --card-gradient: var(--color-bg-8);
    
    /* Enhanced spacing system for minimalist design */
    --section-padding: 120px;
    --card-padding: 24px;
    --element-spacing: 24px;
    
    /* Enhanced shadows for depth */
    --shadow-gentle: 0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06);
    --shadow-elevated: 0 8px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.06);
    
    /* Enhanced transitions */
    --transition-smooth: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Enhanced typography scales */
    --text-display: 64px;
    --text-heading-xl: 48px;
    --text-heading-lg: 40px;
    --text-heading-md: 32px;
    --text-body-lg: 18px;
    --text-body-base: 16px;
}

/* Base styles with enhanced typography */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-family: var(--font-family-primary);
    line-height: 1.6;
    letter-spacing: -0.01em;
}

body {
    color: var(--color-text);
    background-color: var(--color-background);
    font-size: var(--text-body-base);
    overflow-x: hidden;
}

/* Enhanced container with better max-width */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-20);
}

/* Header with enhanced backdrop blur and micro-interactions */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(var(--color-surface), 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
    z-index: 1000;
    transition: var(--transition-smooth);
}

.header.scrolled {
    background-color: rgba(var(--color-surface), 0.98);
    box-shadow: var(--shadow-gentle);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-20) 0;
}

.nav__brand h3 {
    color: var(--color-primary);
    font-weight: 800;
    font-size: var(--font-size-xl);
    transition: var(--transition-smooth);
}

.nav__brand h3:hover {
    transform: scale(1.02);
}

.nav__menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(var(--color-surface), 0.98);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: var(--transition-smooth);
    z-index: 1001;
}

.nav__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-32);
    text-align: center;
}

.nav__link {
    color: var(--color-text);
    font-weight: 600;
    font-size: var(--font-size-xl);
    text-decoration: none;
    transition: var(--transition-smooth);
    position: relative;
    padding: var(--space-8) var(--space-16);
    border-radius: var(--radius-base);
}

.nav__link:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
    transform: translateY(-2px);
}

.nav__link.active {
    color: var(--color-primary);
    background-color: var(--color-secondary);
}

.nav__close {
    position: absolute;
    top: var(--space-24);
    right: var(--space-24);
    font-size: var(--font-size-3xl);
    cursor: pointer;
    color: var(--color-text);
    transition: var(--transition-smooth);
}

.nav__close:hover {
    color: var(--color-primary);
    transform: rotate(90deg);
}

.nav__toggle {
    font-size: var(--font-size-xl);
    cursor: pointer;
    color: var(--color-text);
    display: block;
    transition: var(--transition-smooth);
}

.nav__toggle:hover {
    color: var(--color-primary);
    transform: scale(1.1);
}

.nav__actions {
    display: flex;
    align-items: center;
    gap: var(--space-12);
}

.show-menu {
    right: 0;
}

/* Enhanced Hero Section with better color psychology */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: var(--hero-gradient-primary);
    position: relative;
    overflow: hidden;
    padding-top: 80px;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--hero-gradient-secondary);
    opacity: 0.3;
    z-index: 0;
}

.hero__content {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-32);
    align-items: center;
    width: 100%;
}

.hero__title {
    font-size: clamp(var(--text-heading-lg), 6vw, var(--text-display));
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: var(--space-20);
    color: var(--color-text);
    letter-spacing: -0.02em;
    animation: heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero__tagline {
    font-size: var(--text-body-lg);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-32);
    font-weight: 500;
    animation: heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.hero__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--element-spacing);
    margin-bottom: var(--space-32);
    animation: heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
}

.stat {
    text-align: center;
    padding: var(--space-16);
    background: rgba(var(--color-surface), 0.8);
    border-radius: 16px;
    border: 1px solid var(--color-card-border);
    transition: var(--transition-smooth);
}

.stat:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-gentle);
}

.stat__number {
    display: block;
    font-size: var(--text-heading-md);
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: var(--space-4);
}

.stat__label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    font-weight: 500;
}

.hero__cta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-16);
    margin-bottom: var(--space-32);
    animation: heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
}

.hero__social {
    display: flex;
    gap: var(--space-16);
    animation: heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background-color: var(--color-secondary);
    color: var(--color-text);
    text-decoration: none;
    transition: var(--transition-bounce);
    font-size: var(--font-size-lg);
}

.social-link:hover {
    background-color: var(--color-primary);
    color: var(--color-btn-primary-text);
    transform: translateY(-4px) scale(1.05);
    box-shadow: var(--shadow-elevated);
}

.hero__image {
    display: flex;
    justify-content: center;
    animation: heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
}


.hero__avatar {
    width: 240px;
    height: 240px;
    border-radius: 24px;
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 96px;
    color: var(--color-btn-primary-text);
    box-shadow: var(--shadow-elevated);
    transition: var(--transition-smooth);
}
.hero__avatar::after {
  content: '';
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-primary) 20%, transparent 70%);
  opacity: 0.3;
  animation: pulse 3s ease-in-out infinite;
}
.hero__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* makes image cover the div without distortion */
    border-radius: 24px; /* keeps rounded corners */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero__avatar:hover img {
    transform: scale(1.05) rotateY(5deg);
}

.hero__avatar:hover {
    transform: scale(1.05) rotateY(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Enhanced Sections with better spacing */
.section {
    padding: var(--section-padding) 0;
    position: relative;
}

.section:nth-child(even) {
    background-color: var(--color-surface);
}

.section__title {
    text-align: center;
    margin-bottom: 64px;
    font-size: var(--text-heading-lg);
    font-weight: 800;
    color: var(--color-text);
    position: relative;
    letter-spacing: -0.02em;
}

.section__title::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    width: 80px;
    height: 4px;
    background-color: var(--color-primary);
    transform: translateX(-50%);
    border-radius: var(--radius-full);
}

/* Enhanced About Section */
.about__content {
    max-width: 800px;
    margin: 0 auto;
}

.about__content p {
    font-size: var(--text-body-lg);
    line-height: 1.7;
    margin-bottom: var(--element-spacing);
    color: var(--color-text-secondary);
    text-align: justify;
}

/* Enhanced Interest Cards */
.interests__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--element-spacing);
}

.interest-card {
    background: var(--color-surface);
    padding: var(--space-32);
    border-radius: 16px;
    text-align: center;
    border: 1px solid var(--color-card-border);
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
}

.interest-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--color-primary);
    transform: scaleX(0);
    transition: var(--transition-smooth);
}

.interest-card:hover::before {
    transform: scaleX(1);
}

.interest-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-elevated);
    border-color: var(--color-primary);
}

.interest-card__icon {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    background: var(--card-gradient);
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-20) auto;
    font-size: var(--text-heading-md);
    transition: var(--transition-bounce);
}

.interest-card:hover .interest-card__icon {
    transform: scale(1.1) rotateY(10deg);
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
}

.interest-card__title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-text);
}

/* Enhanced Education Section */
.education-card {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--space-32);
    transition: var(--transition-smooth);
}

.education-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-elevated);
}

.education-card h3 {
    font-size: var(--text-heading-md);
    font-weight: 800;
    margin-bottom: var(--space-12);
    color: var(--color-text);
}

.education-card__institution {
    font-size: var(--font-size-xl);
    color: var(--color-primary);
    margin-bottom: var(--space-16);
    font-weight: 600;
}

.education-card__coursework {
    margin-top: var(--element-spacing);
}

.education-card__coursework h4 {
    margin-bottom: var(--space-16);
    color: var(--color-text);
    font-weight: 700;
}

.coursework-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-12);
}

.tag {
    background: var(--card-gradient);
    color: var(--color-primary);
    padding: var(--space-8) var(--space-16);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: 600;
    border: 1px solid rgba(var(--color-teal-500-rgb), 0.2);
    transition: var(--transition-smooth);
}

.tag:hover {
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    transform: translateY(-2px);
}

/* Enhanced Experience Cards */
.experience__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--element-spacing);
}

.experience-card {
    transition: var(--transition-smooth);
    padding: var(--space-32);
    position: relative;
    overflow: hidden;
}

.experience-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--color-primary);
    transform: scaleY(0);
    transition: var(--transition-smooth);
}

.experience-card:hover::before {
    transform: scaleY(1);
}

.experience-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-elevated);
}

.experience-card__company {
    display: flex;
    align-items: center;
    gap: var(--space-20);
    margin-bottom: var(--space-20);
}
.company-logo {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    overflow: hidden;
    background: linear-gradient(120deg, #f8fafc 50%, #e3e9f5 100%);
    box-shadow: 0 2px 12px rgba(33, 128, 141, 0.07);
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.68,-0.55,0.27,1.55);
}

.company-logo img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0px 1px 2px rgba(30,60,80,0.10));
    transition: transform 0.4s cubic-bezier(0.68,-0.55,0.27,1.55), filter 0.3s cubic-bezier(0.4,0,0.2,1);
}



.experience-card:hover .company-logo img {
    transform: scale(1.10) rotate(3deg);
    filter: drop-shadow(0px 6px 16px rgba(33,128,141,0.11));
}


.experience-card h3 {
    font-size: var(--font-size-xl);
    font-weight: 800;
    margin-bottom: var(--space-8);
    color: var(--color-text);
}

.experience-card__company p {
    color: var(--color-primary);
    font-weight: 600;
    margin: 0;
}

.experience-card__description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    font-size: var(--text-body-base);
}

/* Enhanced Skills Section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--element-spacing);
    margin-bottom: 64px;
}

.skill-category {
    padding: var(--space-32);
    transition: var(--transition-smooth);
}

.skill-category:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-elevated);
}

.skill-category h3 {
    color: var(--color-primary);
    font-size: var(--text-heading-md);
    font-weight: 800;
    margin-bottom: var(--element-spacing);
}

.skills-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
}

.skill-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
}

.skill-item span {
    font-weight: 700;
    color: var(--color-text);
    font-size: var(--text-body-base);
}

.skill-bar {
    height: 12px;
    background-color: var(--color-secondary);
    border-radius: var(--radius-full);
    overflow: hidden;
    position: relative;
}

.skill-progress {
    height: 100%;
    background: var(--color-primary);
    border-radius: var(--radius-full);
    width: 0;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
    animation: shimmer 2s infinite;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-12);
}

/* Enhanced Profile Cards */
.profiles-section h3 {
    color: var(--color-text);
    font-size: var(--text-heading-md);
    font-weight: 800;
    margin-bottom: var(--element-spacing);
}

.profiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-20);
}

.profile-card {
    display: flex;
    align-items: center;
    gap: var(--space-20);
    padding: var(--element-spacing);
    background: var(--color-background);
    border: 1px solid var(--color-card-border);
    border-radius: 16px;
    text-decoration: none;
    color: var(--color-text);
    transition: var(--transition-bounce);
    position: relative;
    overflow: hidden;
}

.profile-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(var(--color-teal-500-rgb), 0.1), transparent);
    transition: left 0.5s;
}

.profile-card:hover::before {
    left: 100%;
}

.profile-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: var(--shadow-elevated);
    border-color: var(--color-primary);
}

.profile-card__icon {
    font-size: var(--text-heading-md);
    color: var(--color-primary);
    width: 60px;
    height: 60px;
    background: var(--card-gradient);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-bounce);
}

.profile-card:hover .profile-card__icon {
    transform: scale(1.2) rotate(-5deg);
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
}

.profile-card h4 {
    margin-bottom: var(--space-8);
    font-weight: 700;
    font-size: var(--font-size-lg);
}

.profile-card p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
    font-weight: 500;
}

/* Enhanced Contact Section */
.contact__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-32);
    max-width: 1000px;
    margin: 0 auto;
}

.contact__info h3 {
    color: var(--color-primary);
    font-size: var(--text-heading-md);
    font-weight: 800;
    margin-bottom: var(--space-20);
}

.contact__info p {
    color: var(--color-text-secondary);
    margin-bottom: var(--element-spacing);
    font-size: var(--text-body-lg);
    line-height: 1.6;
}

.contact__methods {
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
}

.contact-method {
    display: flex;
    align-items: center;
    gap: var(--space-20);
    padding: var(--element-spacing);
    background: var(--color-surface);
    border: 1px solid var(--color-card-border);
    border-radius: 16px;
    text-decoration: none;
    color: var(--color-text);
    transition: var(--transition-bounce);
}

.contact-method:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: var(--shadow-elevated);
    border-color: var(--color-primary);
}

.contact-method__icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-xl);
    transition: var(--transition-bounce);
}

.contact-method:hover .contact-method__icon {
    transform: scale(1.1) rotate(5deg);
}

.contact-method h4 {
    margin-bottom: var(--space-8);
    font-weight: 700;
    font-size: var(--font-size-lg);
}

.contact-method p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
}

.contact__form {
    background: var(--color-surface);
    padding: var(--space-32);
    border-radius: 20px;
    border: 1px solid var(--color-card-border);
    box-shadow: var(--shadow-gentle);
}

.form-group {
    margin-bottom: var(--element-spacing);
}

.form-control {
    padding: var(--space-16);
    border-radius: 12px;
    border: 2px solid var(--color-border);
    transition: var(--transition-smooth);
    font-size: var(--text-body-base);
}

.form-control:focus {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--color-teal-500-rgb), 0.2);
}

/* Enhanced Buttons with orange accent */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 12px;
    font-size: var(--text-body-base);
    font-weight: 600;
    line-height: 1.5;
    cursor: pointer;
    transition: var(--transition-bounce);
    border: none;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    gap: var(--space-8);
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.btn--primary {
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
}

.btn--primary:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px) scale(1.05);
    box-shadow: var(--shadow-elevated);
}

.btn--outline {
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
}

.btn--outline:hover {
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    transform: translateY(-2px) scale(1.05);
    box-shadow: var(--shadow-elevated);
}

.btn--sm {
    padding: var(--space-8) var(--space-16);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-base);
}

.btn--full-width {
    width: 100%;
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
}

/* Enhanced Footer */
.footer {
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
    padding: var(--space-32) 0;
}

.footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__social {
    display: flex;
    gap: var(--space-12);
}

.footer__social .social-link {
    width: 44px;
    height: 44px;
    font-size: var(--font-size-lg);
}

/* Enhanced Animations */
@keyframes heroSlideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.fade-in-up {
    animation: heroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Status indicators with better styling */
.status {
    padding: var(--space-8) var(--space-16);
    border-radius: var(--radius-full);
    font-weight: 600;
    font-size: var(--font-size-sm);
    border: 2px solid transparent;
}

.status--info {
    background: var(--card-gradient);
    color: var(--color-info);
    border-color: rgba(var(--color-info-rgb), 0.2);
}

/* Responsive Design with enhanced breakpoints */
@media (min-width: 768px) {
    .nav__menu {
        position: static;
        width: auto;
        height: auto;
        background: none;
        flex-direction: row;
        backdrop-filter: none;
    }

    .nav__list {
        flex-direction: row;
        gap: var(--space-32);
    }

    .nav__link {
        font-size: var(--text-body-base);
        padding: var(--space-8) var(--space-16);
    }

    .nav__close,
    .nav__toggle {
        display: none;
    }

    .hero__content {
        grid-template-columns: 1fr auto;
        gap: 64px;
        text-align: left;
    }

    .hero__stats {
        grid-template-columns: repeat(3, 1fr);
    }

    .hero__cta {
        justify-content: flex-start;
    }

    .contact__content {
        grid-template-columns: 1fr 1fr;
        gap: 64px;
    }

    .section {
        padding: 160px 0;
    }
}

@media (max-width: 767px) {
    :root {
        --section-padding: 80px;
        --text-display: 48px;
        --text-heading-xl: 40px;
        --text-heading-lg: 32px;
    }

    .hero__stats {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero__cta {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .nav__actions .btn {
        width: auto;
    }

    .footer__content {
        flex-direction: column;
        gap: var(--space-20);
        text-align: center;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .experience__grid {
        grid-template-columns: 1fr;
    }

    .profiles-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 var(--space-16);
    }
    
    .interests__grid {
        grid-template-columns: 1fr;
    }
    
    .hero__avatar {
        width: 200px;
        height: 200px;
        font-size: 80px;
    }
}

/* Loading state enhancements */
.loading * {
    animation-play-state: paused !important;
}

/* Print styles */
@media print {
    .header,
    .hero__social,
    .nav__actions,
    .contact__form {
        display: none !important;
    }
    
    .section {
        padding: var(--space-32) 0 !important;
        break-inside: avoid;
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    :root {
        --shadow-gentle: 0 2px 4px rgba(0, 0, 0, 0.3);
        --shadow-elevated: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
    
    .btn {
        border: 2px solid currentColor;
    }
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero {
  background: linear-gradient(120deg, var(--color-primary), var(--color-secondary), var(--color-accent));
  background-size: 200% 200%;
  animation: gradientShift 18s ease infinite;
}
.btn--primary:hover {
  transition-delay: 60ms;
}


/* =========================== */
/* PROFILE PHOTO & EMAIL FIXES */
/* =========================== */

/* Enhanced Profile Photo Effects Fix */
.hero__avatar {
    width: 240px;
    height: 240px;
    border-radius: 24px;
    background: var(--color-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 96px;
    color: var(--color-btn-primary-text);
    box-shadow: var(--shadow-elevated);
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
    /* Remove problematic gradient effects */
}

/* Clean hover effect without gradients */
.hero__avatar:hover {
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hero__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    transition: transform 0.3s ease;
}

.hero__avatar:hover img {
    transform: scale(1.05);
}

/* Remove the problematic ::after pseudo-element that creates unwanted effects */
.hero__avatar::after {
    display: none !important;
}

/* Enhanced form styling for better email functionality */
.contact__form {
    background: var(--color-surface);
    padding: var(--space-32);
    border-radius: 20px;
    border: 1px solid var(--color-card-border);
    box-shadow: var(--shadow-gentle);
}

.form-message {
    margin-top: 20px;
    padding: 16px 20px;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-weight: 500;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.form-message.show {
    opacity: 1;
    transform: translateY(0);
}

.form-message i {
    font-size: 18px;
    margin-top: 2px;
    flex-shrink: 0;
}

.form-message.success {
    background-color: rgba(var(--color-success-rgb), 0.1);
    color: var(--color-success);
    border: 1px solid rgba(var(--color-success-rgb), 0.25);
}

.form-message.error {
    background-color: rgba(var(--color-error-rgb), 0.1);
    color: var(--color-error);
    border: 1px solid rgba(var(--color-error-rgb), 0.25);
}

.form-message.info {
    background-color: rgba(var(--color-info-rgb), 0.1);
    color: var(--color-info);
    border: 1px solid rgba(var(--color-info-rgb), 0.25);
}

/* Enhanced button states for form submission */
.btn.loading {
    position: relative;
    pointer-events: none;
}

.btn.loading::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top-color: currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 8px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Remove shimmer effect that might be causing issues */
@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.skill-progress::after {
    /* Remove or simplify the shimmer effect */
    display: none;
}
