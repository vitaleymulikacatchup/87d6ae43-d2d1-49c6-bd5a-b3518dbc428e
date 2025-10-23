"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Bed, Crown, MapPin, MessageCircle, Sparkles, Star, Waves } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Dining", id: "dining" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Azure Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Luxury Redefined"
          description="Experience unparalleled elegance and world-class service at Grand Azure Hotel, where every moment becomes an unforgettable memory"
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Excellence in Hospitality"
          description="For over four decades, Grand Azure Hotel has set the standard for luxury hospitality, combining timeless elegance with modern comfort"
          tag="Heritage"
          tagIcon={Crown}
          bulletPoints={[
            {
              title: "Award-Winning Service",
              description: "Recognized globally for exceptional guest experiences and personalized attention",
              icon: Award
            },
            {
              title: "Prime Location",
              description: "Situated in the heart of the city with breathtaking views and easy access to attractions",
              icon: MapPin
            },
            {
              title: "Luxury Amenities",
              description: "World-class facilities including spa, fine dining, and exclusive business services",
              icon: Sparkles
            }
          ]}
          imageSrc="https://images.pexels.com/photos/34389395/pexels-photo-34389395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Azure Hotel exterior architecture"
          imagePosition="right"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <FeatureCardTwo
          title="Exquisite Accommodations"
          description="Discover our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and style"
          tag="Rooms & Suites"
          tagIcon={Bed}
          features={[
            {
              title: "Deluxe Room",
              description: "Spacious rooms with premium amenities, marble bathrooms, and stunning city views for the discerning traveler",
              icon: Star,
              button: { text: "View Details", href: "contact" }
            },
            {
              title: "Ocean View Suite",
              description: "Luxurious suites featuring panoramic ocean views, separate living areas, and exclusive concierge service",
              icon: Waves,
              button: { text: "View Details", href: "contact" }
            },
            {
              title: "Presidential Suite",
              description: "The pinnacle of luxury with private terraces, personal butler service, and bespoke furnishings",
              icon: Crown,
              button: { text: "View Details", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our comprehensive range of luxury amenities designed to enhance every aspect of your stay"
          tag="Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Azure Spa & Wellness",
              description: "Rejuvenate your senses with our award-winning spa treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel spa and wellness center"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our world-renowned chefs using the finest ingredients",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel restaurant with fine dining"
            },
            {
              title: "Fitness & Recreation",
              description: "Stay active with our state-of-the-art fitness center and recreational facilities",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center and gym"
            },
            {
              title: "Business Center",
              description: "Conduct business seamlessly with our fully equipped business center and meeting rooms",
              imageSrc: "https://images.pexels.com/photos/6475035/pexels-photo-6475035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel business center and meeting facilities"
            },
            {
              title: "Concierge Services",
              description: "Our dedicated concierge team is available 24/7 to assist with all your needs and requests",
              imageSrc: "https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel concierge service desk"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Discover why discerning travelers choose Grand Azure Hotel for their most important journeys"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Richardson",
              role: "CEO, Richardson Enterprises",
              testimonial: "The attention to detail and level of service at Grand Azure Hotel exceeded all expectations. Every aspect of our corporate retreat was flawlessly executed.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Richardson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              testimonial: "From the moment we arrived, the staff anticipated our every need. The presidential suite was absolutely magnificent, and the dining experience was extraordinary.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Isabella Martinez",
              role: "Art Gallery Owner",
              testimonial: "Grand Azure Hotel provides an oasis of tranquility in the bustling city. The spa services were rejuvenating, and the ocean views from our suite were breathtaking.",
              imageSrc: "https://images.pexels.com/photos/6466492/pexels-photo-6466492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Martinez"
            },
            {
              id: "4",
              name: "James Wellington",
              role: "Diplomat",
              testimonial: "Having stayed at luxury hotels worldwide, I can confidently say Grand Azure Hotel stands in a class of its own. The service is impeccable and the amenities are world-class.",
              imageSrc: "https://images.pexels.com/photos/11911820/pexels-photo-11911820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wellington"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Global Leaders"
          description="Join distinguished guests and prestigious organizations who choose Grand Azure Hotel for their most important occasions"
          tag="Recognition"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/698699/pexels-photo-698699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7648306/pexels-photo-7648306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/698699/pexels-photo-698699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31682496/pexels-photo-31682496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Experience"
          description="Contact our reservations team to book your stay or inquire about our exclusive packages and services"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "dates", type: "text", placeholder: "Check-in & Check-out Dates", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or inquiries...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
          imageSrc="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel reception desk and elegant lobby"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Dining", href: "dining" },
                { label: "Amenities", href: "amenities" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Business Center", href: "amenities" },
                { label: "Concierge", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Reservations", href: "contact" },
                { label: "Guest Services", href: "contact" },
                { label: "Accessibility", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Azure Hotel"
        />
      </div>
    </ThemeProvider>
  );
}