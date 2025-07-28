# 🥋 Karate Dojo Website

A modern, responsive karate website built with React, Tailwind CSS, and Framer Motion. Features a traditional martial arts design with contemporary web technologies.

## ✨ Features

- **Hero Animation**: 3-second karate fight animation on page load
- **Responsive Navigation**: Sticky navbar with smooth hover effects and mobile hamburger menu
- **Interactive Sections**:
  - Tournament listings with registration
  - National camp programs
  - Dojo facilities and class schedules
- **Animated Footer**: Contact information with gallery modal
- **Modern Design**: Red/Black/White martial arts theme
- **Mobile Optimized**: Fully responsive across all devices

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Unicode emojis
- **Deployment**: Static hosting ready (Vercel, Netlify, GitHub Pages)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Design System

### Colors
- **Primary Red**: #dc2626 (karate-red)
- **Black**: #111827 (karate-black)
- **White**: #ffffff (karate-white)

### Typography
- **Headers**: Impact, Arial Black (martial font family)
- **Body**: System UI fonts

### Animations
- Fade in effects
- Hover transitions
- Scroll-triggered animations
- Loading spinner

## 📄 Pages & Sections

1. **Hero Section**: Welcome message with animated background
2. **Tournaments**: National tournaments and championships
3. **Camp**: Training programs and instructor information
4. **Dojo**: Facilities, schedule, and location details
5. **Footer**: Contact info, social links, and photo gallery

## 🌐 Deployment

This is a static website that can be deployed to any hosting service:

### Vercel
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📝 Customization

### Updating Content
- Edit component files in `src/components/`
- Modify colors in `tailwind.config.js`
- Update animations in component files

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation in `Navbar.jsx`

## 🎯 Performance

- Optimized images and animations
- Code splitting with Vite
- Minimal bundle size
- Fast loading times

## 📞 Contact & Philosophy

> "Discipline. Strength. Honor."
> 
> The way of karate is not just physical training, but a path to spiritual growth and self-discovery.

---

Built with ❤️ and 🥋 discipline.
