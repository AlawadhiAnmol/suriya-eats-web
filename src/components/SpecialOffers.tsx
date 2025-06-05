
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Configuration for easy updates
const OFFERS_CONFIG = {
  offers: [
    {
      id: 1,
      title: "Weekend Family Special",
      description: "Complete family meal for 4 people including rice, 3 curries, and dessert",
      originalPrice: "€59.90",
      discountPrice: "€45.90",
      validUntil: "2024-12-31",
      badge: "Save 23%",
      terms: "Valid Friday-Sunday, advance booking required"
    },
    {
      id: 2,
      title: "Lunch Time Offer",
      description: "Rice & curry with drink included, available Monday to Friday",
      originalPrice: "€15.90",
      discountPrice: "€11.90",
      validUntil: "2024-12-31",
      badge: "Weekday Special",
      terms: "11:30 AM - 3:00 PM, dine-in only"
    },
    {
      id: 3,
      title: "First Visit Discount",
      description: "20% off your first order when you mention this offer",
      originalPrice: "",
      discountPrice: "20% OFF",
      validUntil: "2024-12-31",
      badge: "New Customer",
      terms: "Cannot be combined with other offers"
    },
    {
      id: 4,
      title: "Birthday Celebration",
      description: "Free dessert for birthday person with valid ID and table of 4+",
      originalPrice: "",
      discountPrice: "FREE Dessert",
      validUntil: "2024-12-31",
      badge: "Birthday Special",
      terms: "Valid ID required, minimum 4 people"
    }
  ],
  voucherCode: "SURIYA2024" // Replace with actual voucher code
};

const SpecialOffers = () => {
  const handleClaimOffer = (offerId: number) => {
    // Here you could implement voucher generation or redirect to booking
    console.log(`Claiming offer ${offerId}`);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">Special Offers & Vouchers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy exclusive deals and special promotions at Suriya Kanthi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {OFFERS_CONFIG.offers.map((offer) => (
            <Card key={offer.id} className="shadow-xl border-orange-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-lg relative">
                <Badge className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
                  {offer.badge}
                </Badge>
                <CardTitle className="text-xl font-bold pr-20">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{offer.description}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  {offer.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                  )}
                  <span className="text-2xl font-bold text-red-600">{offer.discountPrice}</span>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-orange-800">
                    <strong>Terms:</strong> {offer.terms}
                  </p>
                  <p className="text-sm text-orange-700 mt-1">
                    <strong>Valid until:</strong> {offer.validUntil}
                  </p>
                </div>

                <Button
                  onClick={() => handleClaimOffer(offer.id)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-all duration-300"
                >
                  Claim This Offer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Voucher Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-red-800 mb-4">Exclusive Voucher Code</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Use this special code for additional savings on your next visit
                </p>
                
                <div className="bg-white border-2 border-dashed border-red-400 rounded-lg p-6 mb-6">
                  <div className="text-4xl font-bold text-red-600 font-mono tracking-wider mb-2">
                    {OFFERS_CONFIG.voucherCode}
                  </div>
                  <p className="text-sm text-gray-500">
                    Present this code when ordering or mention during table booking
                  </p>
                </div>

                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(OFFERS_CONFIG.voucherCode);
                    // You could add a toast notification here
                  }}
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  Copy Voucher Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
