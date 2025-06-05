
// Central configuration file for easy updates
// Change these values to customize your restaurant website

export const SITE_CONFIG = {
  // Restaurant Information
  restaurantName: "Suriya Kanthi",
  tagline: "Authentic Sri Lankan Cuisine",
  description: "Experience the rich flavors and aromatic spices of traditional Sri Lankan dishes in the heart of Germany.",
  
  // Contact Information
  address: "Musterstraße 123, 12345 Berlin, Germany", // Replace with actual address
  phone: "+49 123 456 7890", // Replace with actual phone number
  email: "info@suriyakanthi.de", // Replace with actual email
  
  // External Links
  woltOrderLink: "https://wolt.com/restaurant", // Replace with actual Wolt link
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4089432889896!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzEyLjAiTiAxM8KwMjQnMTcuOCJF!5e0!3m2!1sen!2sde!4v1234567890123", // Replace with actual Google Maps embed URL
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir//Musterstraße+123,+12345+Berlin,+Germany", // Replace with actual directions URL
  
  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/suriyakanthi", // Replace with actual links
    instagram: "https://instagram.com/suriyakanthi",
    tripadvisor: "https://tripadvisor.com/restaurant/suriyakanthi"
  },
  
  // Images (replace with your actual image paths)
  images: {
    heroImage: "/placeholder.svg", // Replace with actual hero image
    logoImage: "/placeholder.svg", // Replace with actual logo
  },
  
  // Opening Hours
  openingHours: [
    { day: "Monday - Thursday", hours: "17:00 - 22:00" },
    { day: "Friday - Saturday", hours: "17:00 - 23:00" },
    { day: "Sunday", hours: "16:00 - 22:00" }
  ],
  
  // Voucher Code
  voucherCode: "SURIYA2024" // Replace with actual voucher code
};

// Color Theme Configuration
// Choose one of the provided color schemes or customize
export const COLOR_THEMES = {
  // Current theme colors (change this to switch themes)
  primary: "#E74C3C", // Red
  secondary: "#F39C12", // Orange
  accent: "#D35400", // Dark Orange
  brown: "#8B4513", // Saddle Brown
  
  // Alternative color combinations you can use:
  // Theme 1: Red-Orange
  // primary: "#E74C3C", secondary: "#F39C12", accent: "#D35400"
  
  // Theme 2: Orange-Brown
  // primary: "#F39C12", secondary: "#D35400", accent: "#8B4513"
  
  // Theme 3: Red-Brown
  // primary: "#E74C3C", secondary: "#8B4513", accent: "#D35400"
};

// CSS Custom Properties for easy color management
export const CSS_VARIABLES = `
  :root {
    --primary-color: ${COLOR_THEMES.primary};
    --secondary-color: ${COLOR_THEMES.secondary};
    --accent-color: ${COLOR_THEMES.accent};
    --brown-color: ${COLOR_THEMES.brown};
  }
`;
