# Jankin Videoke Landing Page Documentation

## Overview
The landing page is built using React and Bootstrap, featuring a modern and responsive design with smooth animations and user-friendly interactions. This documentation covers the structure, components, and functionality of the landing page.

## Component Structure

### 1. Layout Component (`Layout.jsx`)
- **Purpose**: Provides a consistent layout structure across pages
- **Features**:
  - Configurable header and footer visibility
  - Responsive container for main content
  - Props:
    - `showHeader` (boolean): Toggle header visibility
    - `showFooter` (boolean): Toggle footer visibility
    - `children`: Main content to be rendered

### 2. Header Component (`Header.jsx`)
- **Features**:
  - Fixed navigation bar with transparent background
  - Responsive menu with hamburger for mobile
  - Navigation links: Home, Features, Pricing, Contact
  - Login button with gradient styling
  - Smooth scroll behavior for navigation

### 3. Hero Section (`HeroSection.jsx`)
- **Features**:
  - Gradient background with subtle pattern overlay
  - Animated content entrance
  - Call-to-action buttons:
    - "Get Started Free" button
    - "Learn More" button with smooth scroll to features
  - Trust indicators (No credit card required, 14-day trial)
  - Floating animation for hero image

### 4. Feature Section (`FeatureSection.jsx`)
- **Features**:
  - Three feature cards with hover effects
  - Gradient top border animation on hover
  - Icon with gradient text effect
  - Responsive grid layout

### 5. Testimonials Section (`TestimonialsSection.jsx`)
- **Features**:
  - Three testimonial cards with user feedback
  - Circular profile images with border
  - Hover animation effect
  - Responsive grid layout
  - Custom styling for quotes and user information

### 6. Contact Section (`ContactSection.jsx`)
- **Features**:
  - Contact form with styled inputs
  - Form validation ready
  - Responsive layout
  - Clean and professional design

### 7. Footer Component (`Footer.jsx`)
- **Features**:
  - Three-column layout
  - About section
  - Quick links navigation
  - Social media links
  - Copyright information
  - Responsive design

### 8. ScrollToTop Component (`ScrollToTop.jsx`)
- **Features**:
  - Appears after scrolling down 300px
  - Smooth scroll animation to top
  - Gradient background with hover effect
  - Mobile-friendly positioning

## Styling and Animations

### CSS Files Structure
1. `jankin-videoke-landingpage.css`: Main styles for the landing page
2. `header.css`: Header-specific styles
3. `footer.css`: Footer-specific styles
4. `testimonials.css`: Testimonials section styles
5. `scroll-to-top.css`: Scroll button styles

### Key Animations
1. **Content Fade-in**:
   - `animate-in`: Base animation
   - `animate-in-delay-1`: 0.2s delay
   - `animate-in-delay-2`: 0.4s delay
   - `animate-in-delay-3`: 0.6s delay

2. **Hover Effects**:
   - Button hover with transform
   - Card hover with elevation
   - Feature card border animation
   - Social link color transition

3. **Float Animation**:
   - Applied to hero image
   - 6-second duration
   - Infinite loop
   - Smooth easing


## Dependencies
- Bootstrap 5
- Bootstrap Icons
- React
- CSS Modules

## Best Practices Implemented
1. **Performance**:
   - Optimized animations
   - Lazy loading ready
   - Efficient CSS selectors

2. **Accessibility**:
   - Semantic HTML structure
   - ARIA labels where needed
   - Keyboard navigation support
   - Color contrast compliance

3. **Code Organization**:
   - Component-based architecture
   - Separated concerns (layout, components, styles)
   - Reusable components
   - Consistent naming conventions

## Usage Instructions
1. To hide/show header or footer:
```jsx
<Layout showHeader={false} showFooter={true}>
  {/* Your content */}
</Layout>
```

2. To modify animations:
   - Add animation classes: `animate-in`, `animate-in-delay-1`, etc.
   - Customize timing in respective CSS files

3. To add new sections:
   - Create new component
   - Import in `jankin-videoke-landingpage.jsx`
   - Add to the layout structure

4. To customize styles:
   - Modify respective CSS files
   - Use CSS custom properties for consistent theming
   - Follow BEM naming convention for new classes

