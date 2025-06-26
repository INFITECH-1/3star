# 3 Star Holdings (Pvt) Ltd - Website

A modern, responsive website for 3 Star Holdings (Pvt) Ltd, a leading construction workforce and machinery supply company in Sri Lanka.

## 🌟 Features

### Design & User Experience
- **Modern & Professional Design**: Clean, modern interface with red, white, and dark gray color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle hover effects and transitions for enhanced user experience
- **Accessibility**: Built with accessibility best practices in mind

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Us**: Company description, history, and board of directors
3. **Services**: Comprehensive list of services offered
4. **Projects**: Showcase of present and past projects with images
5. **Testimonials**: Client feedback and commendations
6. **Certificates**: Official registrations and certifications
7. **Contact**: Contact information and inquiry form

### Technical Features
- **Mobile-First Design**: Responsive design that works on all screen sizes
- **Interactive Navigation**: Smooth scrolling and mobile hamburger menu
- **Dynamic Content**: JavaScript-powered project tabs and form handling
- **Image Optimization**: Proper image handling with fallbacks
- **Contact Form**: Functional contact form with email integration

## 📁 Project Structure

```
3star-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main stylesheet
│   └── responsive.css      # Responsive design rules
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Website images (if any)
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs on any static file server

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The website should load immediately

### Local Development
For local development, you can use any of these methods:

**Using Python (if installed):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx serve .
```

**Using PHP (if installed):**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization. Main colors are defined in `css/style.css`:

```css
:root {
    --primary-color: #dc2626;      /* Red */
    --primary-dark: #b91c1c;       /* Darker red */
    --secondary-color: #1f2937;    /* Dark gray */
    --text-dark: #111827;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --white: #ffffff;              /* White */
}
```

### Content Updates
- **Company Information**: Update content in `index.html`
- **Projects**: Modify the `projectsData` object in `js/main.js`
- **Images**: Replace images in the `web images/` directory and update paths
- **Contact Information**: Update contact details in the contact section

### Adding New Projects
To add new projects, edit the `projectsData` object in `js/main.js`:

```javascript
{
    name: "Project Name",
    description: "Project description",
    image: "path/to/image.jpg",
    status: "present" // or "past"
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📧 Contact Form

The contact form includes:
- Form validation (client-side)
- Email integration (opens default email client)
- Service selection dropdown
- Responsive design

## 🖼️ Image Requirements

- **Hero Image**: Recommended size 800x600px or larger
- **Project Images**: Recommended size 600x400px or larger
- **Certificate Images**: Recommended size 400x600px or larger
- **Format**: JPG, PNG, or WebP

## 🚀 Deployment

### Static Hosting
The website can be deployed on any static hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your repository to Vercel
- **AWS S3**: Upload files to an S3 bucket with static website hosting
- **Traditional Web Hosting**: Upload files via FTP

### Domain Setup
1. Purchase a domain name
2. Configure DNS settings to point to your hosting provider
3. Set up SSL certificate (most hosting providers offer this automatically)

## 📄 License

This project is created for 3 Star Holdings (Pvt) Ltd. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

## 📞 Company Contact

**3 Star Holdings (Pvt) Ltd**
- Address: 411/1N, ATHURUGIRIYA RD, MALABE, SRI LANKA
- Phone: 0714 910 972 / 0112 185 955
- Fax: 0112 762 909
- Email: 3starholdingspvt@gmail.com / 3starlabour@gmail.com

---

**Built with ❤️ for 3 Star Holdings (Pvt) Ltd** 