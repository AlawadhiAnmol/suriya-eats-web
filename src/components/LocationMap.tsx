
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Configuration for easy updates
const LOCATION_CONFIG = {
  address: "Musterstraße 123, 12345 Berlin, Germany", // Replace with actual address
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4089432889896!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzEyLjAiTiAxM8KwMjQnMTcuOCJF!5e0!3m2!1sen!2sde!4v1234567890123", // Replace with actual Google Maps embed URL
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir//Musterstraße+123,+12345+Berlin,+Germany", // Replace with actual directions URL
  phone: "+49 123 456 7890", // Replace with actual phone number
  email: "info@suriyakanthi.de", // Replace with actual email
};

const LocationMap = () => {
  const handleGetDirections = () => {
    window.open(LOCATION_CONFIG.googleMapsDirectionsUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${LOCATION_CONFIG.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${LOCATION_CONFIG.email}`;
  };

  return (
    <div className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us for an authentic Sri Lankan dining experience in the heart of the city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-orange-200 overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <iframe
                  src={LOCATION_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Suriya Kanthi Restaurant Location"
                  className="rounded-lg"
                />
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-xl border-orange-200">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Address</h4>
                  <p className="text-gray-600 leading-relaxed">{LOCATION_CONFIG.address}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Phone</h4>
                  <p className="text-gray-600">{LOCATION_CONFIG.phone}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Email</h4>
                  <p className="text-gray-600">{LOCATION_CONFIG.email}</p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleGetDirections}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300"
                  >
                    Get Directions
                  </Button>
                  <Button
                    onClick={handleCall}
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg transition-all duration-300"
                  >
                    Call Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-orange-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-red-800 mb-4">Opening Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span>17:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span>17:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span>17:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span>17:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Friday</span>
                    <span>17:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Saturday</span>
                    <span>17:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>16:00 - 22:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-orange-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-green-800 mb-3">Public Transport</h4>
                <p className="text-sm text-green-700 leading-relaxed">
                  Easily accessible by U-Bahn, S-Bahn, and bus. Parking available nearby.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
