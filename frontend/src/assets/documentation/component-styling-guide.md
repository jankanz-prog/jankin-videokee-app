# Component Styling Guide

## Color Scheme
```css
/* Primary Colors */
--primary-gradient-start: #6a11cb;
--primary-gradient-end: #2575fc;
--primary-hover: #5a0cb2;
--primary-text: #333;
--secondary-text: #666;
```

## Animation Timings
```css
/* Transitions */
--transition-fast: 0.2s;
--transition-normal: 0.3s;
--transition-slow: 0.6s;
```

## Components Style Guide

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, var(--primary-gradient-start), var(--primary-gradient-end));
  padding: 12px 30px;
  border-radius: 8px;
  transition: all var(--transition-normal) ease;
}

/* Outline Button */
.btn-outline {
  border: 2px solid var(--primary-gradient-start);
  color: var(--primary-gradient-start);
}
```

### Cards
```css
/* Base Card */
.card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-normal) ease;
}

/* Card Hover */
.card:hover {
  transform: translateY(-10px);
}
```

### Text Styles
```css
/* Headings */
h1, .h1 { font-size: 3.5rem; font-weight: 700; }
h2, .h2 { font-size: 2.5rem; font-weight: 600; }
h3, .h3 { font-size: 2rem; font-weight: 600; }

/* Body Text */
.body-text { font-size: 1rem; line-height: 1.6; }
.lead { font-size: 1.25rem; line-height: 1.8; }
```

### Spacing
```css
/* Section Spacing */
--section-padding: 100px;
--section-padding-mobile: 60px;

/* Component Spacing */
--component-margin: 2rem;
--element-margin: 1rem;
```

### Animations
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Float */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
```

### Responsive Breakpoints
```css
/* Breakpoints */
--mobile: 576px;
--tablet: 768px;
--desktop: 992px;
--large-desktop: 1200px;

/* Media Queries */
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (min-width: 769px) and (max-width: 991px) {
  /* Tablet styles */
}

@media (min-width: 992px) {
  /* Desktop styles */
}
```

### Icons
- Use Bootstrap Icons for consistency
- Standard sizes:
  - Small: 1rem
  - Medium: 1.5rem
  - Large: 2.5rem

### Shadows
```css
/* Shadows */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
```

### Forms
```css
/* Input Styles */
.form-control {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 12px;
  transition: border-color var(--transition-normal) ease;
}

.form-control:focus {
  border-color: var(--primary-gradient-start);
  box-shadow: none;
  outline: none;
}
```
