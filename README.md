# Pit Stop Cafe Website

A modern, elegant, and responsive website for Pit Stop Cafe located in Copacabana, Bolivia.

## Features

- **Modern Design**: Clean, professional layout with coffee-themed color scheme
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Menu**: Tabbed menu system with Coffee, Food, Desserts, and Beverages sections
- **Smooth Animations**: Elegant scroll animations and hover effects
- **Mobile Navigation**: Collapsible hamburger menu for mobile devices
- **Gallery Section**: Showcase cafe atmosphere and offerings
- **Contact Information**: Easy-to-find location and contact details
- **Social Media Integration**: Links to social media platforms

## Color Scheme

The website uses a warm, coffee-inspired color palette:
- Primary: #8B4513 (Saddle Brown)
- Secondary: #D2691E (Chocolate)
- Accent: #F4E4BC (Vanilla)
- Dark: #2C1810 (Dark Brown)
- Light: #FFF8F0 (Floral White)

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── logo.jpg        # Cafe logo (add your logo here)
│   ├── about-image.jpg # About section image
│   ├── coffee-bg.jpg   # Hero background image
│   └── gallery-*.jpg   # Gallery images (1-6)
└── README.md           # This file
```

## Getting Started

1. **Add Your Logo**: Replace `assets/logo.jpg` with your actual Pit Stop Cafe logo
2. **Add Images**: Add high-quality images to the assets folder:
   - `coffee-bg.jpg` - Hero section background
   - `about-image.jpg` - About section image
   - `gallery-1.jpg` through `gallery-6.jpg` - Gallery images
3. **Update Content**: Modify the HTML content to match your specific offerings and information
4. **Customize Colors**: Adjust the CSS variables in `:root` to match your brand colors

## Customization

### Updating Menu Items
Edit the menu sections in `index.html` within the `.menu-content` divs. Each menu item has:
- Title (h3)
- Description (p)
- Price (span with class "price")

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation links if needed

### Modifying Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    /* ... other colors */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with efficient selectors
- Lazy loading for images
- Smooth scroll behavior
- Minimal JavaScript for fast loading
- Mobile-first responsive design

## SEO Ready

- Semantic HTML structure
- Meta descriptions and titles
- Alt tags for images
- Proper heading hierarchy
- Clean URL structure

## Deployment

1. Upload all files to your web hosting provider
2. Ensure the folder structure is maintained
3. Add your actual images to the assets folder
4. Test on multiple devices and browsers

## Future Enhancements

Consider adding:
- Online ordering system
- Reservation booking
- Customer reviews section
- Newsletter signup
- Live chat integration
- Google Maps integration
- Blog section for cafe news

## Contact Information to Update

Remember to update these placeholder details in the contact section:
- Actual phone number (currently shows +591 XXX XXXX)
- Real email address
- Specific street address in Copacabana
- Operating hours
- Social media links

## Technical Notes

- Uses CSS Grid and Flexbox for layouts
- Font Awesome for icons
- Google Fonts (Playfair Display & Inter)
- Vanilla JavaScript (no external dependencies)
- CSS custom properties for easy theming

Enjoy your beautiful new cafe website! ☕️