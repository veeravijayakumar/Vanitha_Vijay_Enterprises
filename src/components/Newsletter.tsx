
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
            <p className="text-xl text-purple-100 leading-relaxed">
              Subscribe to our newsletter and be the first to know about new arrivals, 
              exclusive deals, and special offers.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-white/90 border-0 text-gray-900 placeholder-gray-500 h-12 rounded-full px-6"
              />
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8 rounded-full font-semibold"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-purple-100 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8 mt-12 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm">Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-sm">Exclusive Deals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
