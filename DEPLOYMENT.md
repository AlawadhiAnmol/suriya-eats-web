
# GitHub Deployment Guide for Suriya Kanthi Restaurant Website

## 📁 How to organize your files on GitHub

### Repository Structure
```
your-restaurant-website/
├── src/
│   ├── components/
│   ├── config/
│   │   └── siteConfig.ts      # ⭐ MAIN CONFIG FILE - Edit this!
│   ├── pages/
│   └── ...
├── public/
│   ├── images/                # Put your restaurant images here
│   └── ...
├── package.json
├── index.html
└── README.md
```

## 🔧 Configuration

### 1. Main Settings (src/config/siteConfig.ts)
This is your **MAIN CONFIGURATION FILE**. Edit this file to customize:
- Restaurant name and description
- Contact information (address, phone, email)
- External links (Wolt, Google Maps, Social Media)
- Opening hours
- Voucher codes
- Color themes

### 2. Images
- Place all restaurant images in the `public/images/` folder
- Update image paths in `siteConfig.ts`
- Recommended images:
  - `hero-image.jpg` (main banner)
  - `logo.png` (restaurant logo)
  - `food-photos/` (menu item photos)

### 3. Colors
In `siteConfig.ts`, you can choose from these color themes:
- **#E74C3C** (Red)
- **#F39C12** (Orange) 
- **#D35400** (Dark Orange)
- **#8B4513** (Brown)

## 🚀 GitHub Deployment Options

### Option 1: GitHub Pages (Free)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: `main`
5. Your site will be available at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free tier available)
1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your GitHub repository
4. Auto-deploy on every push
5. Custom domain support

### Option 3: Vercel (Free tier available)
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Auto-deploy with every push
5. Custom domain support

## 📝 Step-by-Step GitHub Setup

1. **Create Repository**
   ```bash
   # On GitHub, create a new repository
   # Clone it locally
   git clone https://github.com/yourusername/your-restaurant-website.git
   ```

2. **Add Your Files**
   ```bash
   # Copy all project files to the repository folder
   # Update siteConfig.ts with your information
   ```

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Initial restaurant website setup"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select "Deploy from a branch" → main
   - Save

## ⚙️ Build Commands

If using Netlify/Vercel, use these build settings:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18.x

## 🎨 Customization Guide

### Quick Changes in siteConfig.ts:
1. **Restaurant Info**: Change name, tagline, description
2. **Contact**: Update address, phone, email
3. **Links**: Replace Wolt link, Google Maps, social media
4. **Colors**: Uncomment different color theme combinations
5. **Images**: Update image paths to your uploaded images
6. **Hours**: Modify opening hours array

### Example Color Change:
```typescript
// In siteConfig.ts, change these values:
export const COLOR_THEMES = {
  primary: "#F39C12",    // Orange theme
  secondary: "#D35400",  // Dark orange
  accent: "#8B4513",     // Brown
  brown: "#E74C3C",      // Red accent
};
```

## 🔄 Updates

To update your live website:
1. Edit `src/config/siteConfig.ts`
2. Commit and push changes
3. Site auto-deploys (GitHub Pages may take 5-10 minutes)

## 📞 Support

For issues with:
- **GitHub**: Check GitHub documentation
- **Netlify/Vercel**: Check their respective docs
- **Code issues**: Check the browser console for errors
