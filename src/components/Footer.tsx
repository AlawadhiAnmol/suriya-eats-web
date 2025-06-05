
// Configuration for easy updates
const FOOTER_CONFIG = {
  restaurantName: "Suriya Kanthi",
  address: "Musterstraße 123, 12345 Berlin, Germany", // Replace with actual address
  phone: "+49 123 456 7890", // Replace with actual phone number
  email: "info@suriyakanthi.de", // Replace with actual email
  woltOrderLink: "https://wolt.com/restaurant", // Replace with actual Wolt link
  socialMedia: {
    facebook: "https://facebook.com/suriyakanthi", // Replace with actual links
    instagram: "https://instagram.com/suriyakanthi",
    tripadvisor: "https://tripadvisor.com/restaurant/suriyakanthi"
  },
  openingHours: [
    { day: "Monday - Thursday", hours: "17:00 - 22:00" },
    { day: "Friday - Saturday", hours: "17:00 - 23:00" },
    { day: "Sunday", hours: "16:00 - 22:00" }
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <span className="text-2xl font-bold">{FOOTER_CONFIG.restaurantName}</span>
            </div>
            <p className="text-orange-100 leading-relaxed">
              Authentic Sri Lankan cuisine in the heart of Germany. Experience the rich flavors and warm hospitality of our island heritage.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-200 mb-4">Contact Us</h3>
            <div className="space-y-2 text-orange-100">
              <p className="text-sm leading-relaxed">{FOOTER_CONFIG.address}</p>
              <p>
                <a href={`tel:${FOOTER_CONFIG.phone}`} className="hover:text-orange-300 transition-colors">
                  {FOOTER_CONFIG.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${FOOTER_CONFIG.email}`} className="hover:text-orange-300 transition-colors break-all">
                  {FOOTER_CONFIG.email}
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-200 mb-4">Opening Hours</h3>
            <div className="space-y-2 text-orange-100 text-sm">
              {FOOTER_CONFIG.openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span>{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-200 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#menu"
                className="block text-orange-100 hover:text-orange-300 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Menu
              </a>
              <a
                href="#booking"
                className="block text-orange-100 hover:text-orange-300 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Table Booking
              </a>
              <a
                href="#offers"
                className="block text-orange-100 hover:text-orange-300 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Special Offers
              </a>
              <a
                href={FOOTER_CONFIG.woltOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-orange-100 hover:text-orange-300 transition-colors text-sm"
              >
                Order on Wolt
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-orange-200 text-sm">
              © {currentYear} {FOOTER_CONFIG.restaurantName}. All rights reserved.
            </div>
            
            <div className="flex space-x-4">
              <a
                href={FOOTER_CONFIG.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-200 hover:text-orange-300 transition-colors"
              >
                Facebook
              </a>
              <a
                href={FOOTER_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-200 hover:text-orange-300 transition-colors"
              >
                Instagram
              </a>
              <a
                href={FOOTER_CONFIG.socialMedia.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-200 hover:text-orange-300 transition-colors"
              >
                TripAdvisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
