
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Configuration for easy updates
const MENU_CONFIG = {
  categories: [
    {
      id: 'appetizers',
      name: 'Appetizers',
      items: [
        { name: 'Vadai', description: 'Crispy lentil donuts served with sambal', price: '€4.50', spicy: 1 },
        { name: 'Fish Cutlets', description: 'Deep-fried fish patties with Sri Lankan spices', price: '€6.50', spicy: 2 },
        { name: 'Samosas', description: 'Triangular pastries filled with spiced vegetables', price: '€5.00', spicy: 1 },
        { name: 'Isso Vadai', description: 'Prawn fritters with curry leaves', price: '€7.50', spicy: 2 },
      ]
    },
    {
      id: 'mains',
      name: 'Main Courses',
      items: [
        { name: 'Rice & Curry', description: 'Traditional Sri Lankan meal with rice and 3 curries', price: '€12.90', spicy: 2 },
        { name: 'Kottu Roti', description: 'Chopped flatbread stir-fried with vegetables and spices', price: '€10.50', spicy: 3 },
        { name: 'Biryani', description: 'Fragrant basmati rice with chicken or mutton', price: '€14.50', spicy: 2 },
        { name: 'Fish Curry', description: 'Fresh fish in coconut curry sauce', price: '€15.90', spicy: 3 },
        { name: 'Chicken Curry', description: 'Tender chicken in authentic Sri Lankan spices', price: '€13.50', spicy: 2 },
        { name: 'Vegetable Curry', description: 'Mixed vegetables in coconut milk curry', price: '€11.50', spicy: 1 },
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        { name: 'Watalappan', description: 'Traditional coconut custard with jaggery', price: '€4.50', spicy: 0 },
        { name: 'Kiribath', description: 'Milk rice with lunu miris', price: '€3.50', spicy: 1 },
        { name: 'Kokis', description: 'Crispy festive cookies', price: '€4.00', spicy: 0 },
      ]
    },
    {
      id: 'beverages',
      name: 'Beverages',
      items: [
        { name: 'Ceylon Tea', description: 'Premium black tea from the hills of Sri Lanka', price: '€2.50', spicy: 0 },
        { name: 'King Coconut Water', description: 'Fresh tender coconut water', price: '€3.50', spicy: 0 },
        { name: 'Lassi', description: 'Yogurt-based drink with mango or plain', price: '€3.90', spicy: 0 },
        { name: 'Fresh Lime Juice', description: 'Refreshing lime juice with mint', price: '€3.00', spicy: 0 },
      ]
    }
  ]
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const getSpicyIndicator = (level: number) => {
    return '🌶️'.repeat(level);
  };

  const activeItems = MENU_CONFIG.categories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <div className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic Sri Lankan flavors crafted with traditional recipes and the finest spices
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {MENU_CONFIG.categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
                  : 'border-red-600 text-red-600 hover:bg-red-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto animate-fade-in">
          {activeItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white border-orange-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-red-800">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    {item.spicy > 0 && (
                      <span className="text-sm">{getSpicyIndicator(item.spicy)}</span>
                    )}
                    <span className="text-lg font-bold text-orange-600">{item.price}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">🌶️ = Mild • 🌶️🌶️ = Medium • 🌶️🌶️🌶️ = Spicy</p>
          <Button 
            onClick={() => window.open(MENU_CONFIG.woltOrderLink || '#', '_blank')}
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Order Online via Wolt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
