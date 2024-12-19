import React from 'react';
import Layout from './components/Layout';
import ImageSlider from './components/ImageSlider';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Owner",
      content: "Laut Emas transformed my living room with their stunning aquascape. Their attention to detail is remarkable!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      content: "The maintenance service is excellent. They keep our restaurant's aquascape looking perfect all year round.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150"
    },
    {
      name: "Emily Davis",
      role: "Interior Designer",
      content: "I've worked with many aquascape companies, but Laut Emas stands out for their creativity and professionalism.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
    }
  ];

  return (
    <Layout>
      <ImageSlider />
      
      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Design",
                description: "Unique aquascape designs tailored to your space and preferences",
                image: "https://images.unsplash.com/photo-1691387824643-227cc84127cf?auto=format&fit=crop&w=800"
              },
              {
                title: "Maintenance",
                description: "Regular maintenance to keep your aquascape healthy and beautiful",
                image: "https://images.unsplash.com/photo-1578313097818-dfe8d38aa758?auto=format&fit=crop&w=800"
              },
              {
                title: "Consultation",
                description: "Expert advice on aquascaping and aquatic ecosystem management",
                image: "https://plus.unsplash.com/premium_photo-1661301084402-1a0452b5850e?auto=format&fit=crop&w=800"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;