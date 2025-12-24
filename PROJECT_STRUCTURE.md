# The Scroll Buzz - Create React App Version

This is the Create React App version of The Scroll Buzz website with all CSS separated into individual files.

## Project Structure

```
cra-backup/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Services/
│   │   │   ├── Services.js
│   │   │   └── Services.css
│   │   ├── Portfolio/
│   │   │   ├── Portfolio.js
│   │   │   └── Portfolio.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Key Features

- **Separate CSS Files**: Each component has its own CSS file for better organization
- **Create React App**: Uses CRA instead of Vite
- **Lucide React Icons**: For modern, customizable icons
- **Smooth Animations**: Canvas particle effects and CSS animations
- **Responsive Design**: Works on all screen sizes
- **Modern Styling**: Gradient effects, glassmorphism, and hover animations

## Components

### 1. Navbar
- Sticky navigation with scroll effect
- Mobile responsive menu
- Smooth scroll to sections

### 2. Hero
- Animated particle background using Canvas
- Gradient text effects
- Service tags with hover effects
- CTA button

### 3. About
- Mission, Vision, Team, Energy cards
- Intersection Observer for scroll animations
- Gradient icon backgrounds

### 4. Services
- 6 service cards (Digital Marketing, Graphic Design, Web Development, etc.)
- Expandable descriptions
- Feature lists
- Grid layout

### 5. Portfolio
- 6 project cards with hover effects
- Gradient overlays
- Category tags
- View all projects button

### 6. Contact
- Contact form with validation
- Contact information cards
- Social media links
- Form submission handling

### 7. Footer
- Quick links
- Services list
- Social proof
- Copyright information

## Installation

```bash
cd cra-backup
npm install
```

## Available Scripts

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## Dependencies

- **react**: ^19.2.0
- **react-dom**: ^19.2.0
- **lucide-react**: ^0.555.0
- **@supabase/supabase-js**: ^2.84.0

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## CSS Organization

All CSS is modular and separated by component:
- Global styles and animations are in `index.css`
- App wrapper styles are in `App.css`
- Each component has its own CSS file in its respective folder

## Customization

To customize colors, update the gradient values in the CSS files:
- Cyan: `#22d3ee`, `#06b6d4`
- Purple: `#a855f7`, `#9333ea`
- Pink: `#ec4899`, `#f9a8d4`
- Blue: `#3b82f6`, `#2563eb`

## Performance

- Optimized animations using CSS transforms
- Intersection Observer for lazy animations
- Canvas particle effects with requestAnimationFrame
- Production build is optimized and minified
