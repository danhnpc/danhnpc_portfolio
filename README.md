# Photography Portfolio

A clean, minimalist photography portfolio built with React and Vite.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The portfolio will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 📝 Customization

### Update Contact Information
Edit `src/components/Contact.jsx` and update:
- Email address
- Phone number
- Location
- Contact details

### Change Portfolio Title
Edit `src/components/Header.jsx` to change:
- Logo/title text
- Navigation labels if desired

### Customize About Section
Edit `src/components/About.jsx` to update:
- About text
- Services list
- Professional description

### Add/Remove Images
All images are already listed in `src/components/Gallery.jsx`. The component automatically displays all images from the `images/` folder. If you add more images, simply add their filenames to the `images` array in that file.

## 🎨 Design Features

- **Minimalist Design**: Clean, spacious layout with focus on images
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Image Lightbox**: Click any image to view in full screen
- **Smooth Navigation**: Smooth scroll between sections
- **Contact Form**: Simple contact form (note: you'll need backend to actually send emails)
- **Performance**: Lazy loading images for better performance

## 📸 Image Folder Structure

All your images should stay in the `images/` folder. The portfolio is already configured to load from there.

## 🔧 Deployment Options

### Vercel (Recommended - Free)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel automatically builds and deploys

### Netlify (Free)
1. Push code to GitHub
2. Connect to Netlify
3. Automatic deployments on push

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your hosting
3. Set up server to serve `index.html` for client-side routing

## 📧 Contact Form Note

The contact form currently shows a success message but doesn't actually send emails. To enable email functionality, you'll need to:

1. Use a service like EmailJS or Formspree
2. Add a backend API endpoint
3. Update the form submission logic

For now, visitors can copy your email address and contact you directly.

## 💡 Tips

- Keep image filenames organized
- Use high-quality but optimized images
- Update the meta tags in `index.html` for better SEO
- Add Google Analytics if you want to track visitors
- Consider adding social media links in the Footer

Enjoy your new portfolio! 📸
