
# Suriya Kanthi - Sri Lankan Restaurant Website

A modern, responsive website for Suriya Kanthi Sri Lankan restaurant.

## 🔧 Easy Configuration 

All configurable settings are at the top of `src/pages/Index.tsx`:

### Restaurant Information
- Restaurant name, tagline, and description
- Contact details (address, phone, email)
- Opening hours

### External Links
- Wolt ordering link
- Google Maps embed and directions URLs
- Social media links

### Colors
Change the color theme by editing the `COLOR_THEMES` object:
- `primary`: "#E74C3C" (Red)
- `secondary`: "#F39C12" (Orange)
- `accent`: "#D35400" (Dark Orange)
- `brown`: "#8B4513" (Saddle Brown)

### Menu Items
Edit menu categories and items in `src/components/MenuSection.tsx` at the top of the file.

## 📁 File Structure (Only 4 files!)
- `src/pages/Index.tsx` - Main configuration and page structure
- `src/components/Hero.tsx` - Hero section with restaurant intro
- `src/components/MenuSection.tsx` - Scrollable menu with categories
- All other components use the shared configuration

## 🚀 GitHub Deployment

1. **Create a new repository** on GitHub
2. **Upload these files** to your repository
3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch" → main
   - Your site will be live at: `https://yourusername.github.io/repository-name`

## 🖼️ Adding Images

1. Upload images to the `public/` folder in your repository
2. Update image paths in the configuration section of `Index.tsx`:
   ```javascript
   images: {
     heroImage: "/your-hero-image.jpg",
     logoImage: "/your-logo.png",
   }
   ```

## ✅ Features Included

- ✅ Responsive design for all devices
- ✅ Google Maps integration
- ✅ Scrollable menu with categories
- ✅ Table booking form
- ✅ Wolt ordering integration
- ✅ Special offers and vouchers
- ✅ Contact form
- ✅ Social media links

## 🎨 Customization

To change colors, edit the `COLOR_THEMES` object in `Index.tsx`. The available color options are:
- #E74C3C (Red)
- #F39C12 (Orange)
- #D35400 (Dark Orange)
- #8B4513 (Brown)

No backend required - everything runs as a static website!
