# Visual Communication Portfolio Website

A modern, responsive portfolio website designed specifically for visual communication graduates to showcase their design work, photography, videography, and other creative projects.

## 🎨 Features

### Core Sections
- **Navigation Bar** - Sticky navigation with smooth scrolling
- **Hero Section** - Eye-catching introduction with profile image
- **About Section** - Personal bio with statistics
- **Portfolio/Work Section** - Filterable project showcase
- **Skills Section** - Organized display of technical skills
- **Contact Section** - Contact form with social media links
- **Footer** - Copyright and attribution

### Interactive Features
- ✅ Smooth scrolling navigation
- ✅ Portfolio filtering by category (All, Branding, Photography, Video, Web Design)
- ✅ Responsive mobile menu
- ✅ Contact form validation
- ✅ Scroll animations
- ✅ Hover effects and transitions
- ✅ Social media integration

### Design Highlights
- Modern, clean aesthetic suitable for visual designers
- Mobile-first responsive design
- Gradient backgrounds and elegant typography
- Smooth animations and transitions
- Professional color scheme

## 📁 File Structure

```
portfoliov2/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Code editor (optional, for customization)

### Installation

1. Clone or download the repository:
```bash
git clone https://github.com/devadarshinilakshman/portfoliov2.git
```

2. Navigate to the project directory:
```bash
cd portfoliov2
```

3. Open `index.html` in your web browser:
```bash
open index.html
# or
start index.html
# or drag index.html to your browser
```

## 🎯 Customization Guide

### Update Personal Information

1. **Name and Title** - Edit the hero section in `index.html`:
```html
<h1 class="hero-title">Your Title Here</h1>
<p class="hero-subtitle">Your tagline here</p>
```

2. **About Section** - Modify content and statistics:
```html
<div class="about-stats">
    <div class="stat">
        <h3>YOUR NUMBER</h3>
        <p>Your metric</p>
    </div>
</div>
```

3. **Contact Information** - Update in contact section:
```html
<p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
<p>Your City, Country</p>
```

### Add Portfolio Projects

1. Duplicate a portfolio item in the HTML:
```html
<div class="portfolio-item" data-category="branding">
    <img src="YOUR_IMAGE_URL" alt="Project Name">
    <div class="portfolio-overlay">
        <h3>Project Name</h3>
        <p>Project description</p>
        <a href="project-link.html" class="btn-small">View Project</a>
    </div>
</div>
```

2. Update the `data-category` attribute to match your filter categories.

### Replace Placeholder Images

1. Replace image URLs with your own:
```html
<img src="https://via.placeholder.com/400x500" alt="Profile">
<!-- Change to: -->
<img src="path/to/your/image.jpg" alt="Profile">
```

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main text color */
    --secondary-color: #e74c3c;    /* Accent/button color */
    --accent-color: #3498db;       /* Additional accent */
    --light-bg: #ecf0f1;           /* Light background */
    --dark-bg: #1a1a1a;            /* Dark background */
}
```

### Update Social Media Links

Replace placeholder links in the social section:
```html
<a href="https://instagram.com/your-handle" class="social-icon">
    <!-- Social icon -->
</a>
```

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1200px and up)

Breakpoints:
- `768px` - Tablet/Medium devices
- `480px` - Mobile/Small devices

## 🔧 Form Setup

The contact form is currently set up for client-side validation. To enable actual email sending, integrate with a backend service such as:
- Formspree
- EmailJS
- Netlify Forms
- Your own backend API

Example with Formspree (simple setup):
1. Visit [Formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Update the form in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🎨 Filter Categories

Available portfolio filter categories:
- `all` - Shows all projects
- `branding` - Branding and identity work
- `photography` - Photography projects
- `video` - Video and motion graphics
- `web` - Web design projects

You can add custom categories by:
1. Adding new buttons in the filter section
2. Adding `data-category="your-category"` to portfolio items
3. Updating filter functionality in `script.js` if needed

## 🚀 Deployment

### Deploy to GitHub Pages

1. Go to repository settings
2. Navigate to "Pages" section
3. Select main branch as source
4. Your site will be live at: `https://devadarshinilakshman.github.io/portfoliov2/`

### Deploy to Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **Firebase**: Follow their deployment guide
- **Traditional Hosting**: Upload all files via FTP/SSH

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Perfect For

- Visual Communication Graduates
- Graphic Designers
- Photographers
- Videographers
- Creative Professionals
- Design Students

## 📝 License

This portfolio template is open source and free to use. Feel free to customize it for your personal or professional use.

## 🤝 Support

For questions or issues, please feel free to:
- Open an issue on GitHub
- Check the customization guide above
- Review the inline comments in the code

## 📚 Tips for Best Results

1. **Use high-quality images** - Replace placeholder images with professional work samples
2. **Keep descriptions concise** - Use short, impactful project descriptions
3. **Organize projects** - Group similar work in portfolio categories
4. **Regular updates** - Keep portfolio current with latest work
5. **Mobile testing** - Test on actual mobile devices before launch
6. **Fast loading** - Optimize image sizes for faster loading
7. **SEO optimization** - Add meta descriptions and keywords for better discoverability

## 🎉 Showcase

When customized with your work, this portfolio effectively demonstrates:
- Design thinking and visual hierarchy
- Project management and organization
- Technical skills in web design
- Professional presentation
- Diverse skill set across multiple disciplines

---

**Made with ❤️ by Adedarshini Lakshman**

Last Updated: May 2026