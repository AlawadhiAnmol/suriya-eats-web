
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Configuration for easy updates
const CONTACT_CONFIG = {
  phone: "+49 123 456 7890", // Replace with actual phone number
  email: "info@suriyakanthi.de", // Replace with actual email
  socialMedia: {
    facebook: "https://facebook.com/suriyakanthi", // Replace with actual links
    instagram: "https://instagram.com/suriyakanthi",
    tripadvisor: "https://tripadvisor.com/restaurant/suriyakanthi"
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the contact data to your backend
      console.log('Contact form data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-orange-200">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-xl border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Call Us</h4>
                  <p className="text-gray-600">{CONTACT_CONFIG.phone}</p>
                  <Button
                    onClick={() => window.location.href = `tel:${CONTACT_CONFIG.phone}`}
                    variant="outline"
                    size="sm"
                    className="mt-2 border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Call Now
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Email Us</h4>
                  <p className="text-gray-600 break-all">{CONTACT_CONFIG.email}</p>
                  <Button
                    onClick={() => window.location.href = `mailto:${CONTACT_CONFIG.email}`}
                    variant="outline"
                    size="sm"
                    className="mt-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Send Email
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Follow Us</h4>
                  <div className="space-y-2">
                    <Button
                      onClick={() => window.open(CONTACT_CONFIG.socialMedia.facebook, '_blank')}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Facebook
                    </Button>
                    <Button
                      onClick={() => window.open(CONTACT_CONFIG.socialMedia.instagram, '_blank')}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-pink-600 text-pink-600 hover:bg-pink-50"
                    >
                      Instagram
                    </Button>
                    <Button
                      onClick={() => window.open(CONTACT_CONFIG.socialMedia.tripadvisor, '_blank')}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50"
                    >
                      TripAdvisor
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-orange-200 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-red-800 mb-3">Quick Response</h4>
                <p className="text-sm text-red-700 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
