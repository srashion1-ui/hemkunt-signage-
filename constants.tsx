import { Wrench, PenTool, LayoutTemplate, Settings, Monitor, Construction, Printer, Lightbulb, Trophy, Star, Hammer, ShieldCheck, ThumbsUp } from 'lucide-react';
import { NavItem, Service, Product, Client, Testimonial } from './types';

export const COMPANY_NAME = "Hemkunt Signage";

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', id: 'home', isPage: true },
  { label: 'SERVICES', id: 'services', isPage: true },
  { label: 'ABOUT US', id: 'about', isPage: true },
  { label: 'PRODUCTS', id: 'products', isPage: true },
  { label: 'CLIENTS', id: 'clients', isPage: true },
  { label: 'CAREERS', id: 'careers', isPage: true },
  { label: 'CONTACT US', id: 'contact', isPage: true },
  { label: 'SHOP', id: 'shop', isPage: true },
];

export const SERVICES: Service[] = [
  { title: "Retail Visual Identity", icon: LayoutTemplate, description: "Complete turnkey solutions for retail store branding, from facade to in-store directional signage." },
  { title: "Manufacturing", icon: Construction, description: "State-of-the-art in-house manufacturing of LED letters, pylons, and steel structures." },
  { title: "Digital Signage", icon: Monitor, description: "Integration of modern digital displays, video walls, and interactive kiosks." },
  { title: "Installation & Maintenance", icon: Wrench, description: "Pan-India installation network with dedicated teams for repair and annual maintenance." },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "LED CHANNEL LETTERS",
    description: "Premium 3D illuminated letters fabricated from acrylic and stainless steel. Available in front-lit, back-lit, and edge-lit options for maximum night-time visibility.",
    image: "http://hemkuntsignage.com/wp-content/uploads/2024/06/a249cbfb-2cfa-497c-a8b7-df113529d40b.jpg"
  },
  {
    id: 2,
    title: "TOTEMS & PYLONS",
    description: "Large-format freestanding structures designed for highways, petrol pumps, and mall entrances to ensure brand visibility from a distance.",
    image: "https://images.unsplash.com/photo-1584666336332-9a3d4d3db240?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "ACP FACADES",
    description: "Aluminum Composite Panel cladding that gives your building a modern, sleek, and corporate look while providing durability against weather.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "WAYFINDING SIGNAGE",
    description: "Functional and aesthetic directional signs for airports, hospitals, corporate parks, and malls to guide visitor flow efficiently.",
    image: "https://images.unsplash.com/photo-1635327293836-82c81a5a0d33?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "INTERNAL BRANDING",
    description: "Reception signs, wall graphics, frosted films, and office decor elements that reflect your corporate identity indoors.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
   {
    id: 6,
    title: "SAFETY & COMPLIANCE",
    description: "Mandatory fire safety, emergency exit, and industrial safety signage compliant with international standards.",
    image: "https://images.unsplash.com/photo-1596525737676-f725354924a4?q=80&w=2070&auto=format&fit=crop"
  }
];

export const HIGHLIGHTS = [
  {
    title: "42 Years of Experience",
    description: "With 42 years of expertise, we bring unparalleled experience, ensuring top-notch quality and client satisfaction.",
    icon: Trophy
  },
  {
    title: "Best In Quality",
    description: "Unrivaled quality defines us, setting the standard for excellence in every aspect of our offerings.",
    icon: Star
  },
  {
    title: "Repairing Services",
    description: "Swift and reliable, our repair services ensure seamless solutions, restoring functionality with precision and expertise.",
    icon: Wrench
  },
  {
    title: "Installation Service",
    description: "Efficient installation services guarantee seamless setup, ensuring your signboard becomes an instant beacon of distinction.",
    icon: Hammer
  },
  {
    title: "One Year Guarantee",
    description: "Enjoy peace of mind with our one-year guarantee, assuring reliability and satisfaction in our craftsmanship.",
    icon: ShieldCheck
  },
  {
    title: "Customer Satisfaction",
    description: "Customer satisfaction is our priority, driving us to exceed expectations and forge lasting partnerships.",
    icon: ThumbsUp
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Rajesh Gupta", text: "Hemkunt Signage handled our pan-India rebranding for 50+ stores flawlessly. The quality of LED boards is exceptional.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Priya Sharma", text: "Professional team, timely delivery, and excellent after-sales support. Highly recommended for corporate office branding.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Amit Malhotra", text: "Their pylon signs have significantly increased our showroom's visibility from the main highway.", image: "https://randomuser.me/api/portraits/men/67.jpg" },
  { id: 4, name: "Suresh Reddy", text: "Great attention to detail. The ACP cladding work completely transformed our building's facade.", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 5, name: "Meera Kapoor", text: "We rely on Hemkunt for all our safety and directional signage needs across our hospital chain.", image: "https://randomuser.me/api/portraits/women/12.jpg" },
];

// Placeholder logos - In a real scenario, these would be URLs to actual client logos like Tata, Reliance, etc.
export const CLIENT_LOGOS = [
  "https://logo.clearbit.com/tata.com",
  "https://logo.clearbit.com/relianceindustries.com",
  "https://logo.clearbit.com/marutisuzuki.com",
  "https://logo.clearbit.com/hdfcbank.com",
  "https://logo.clearbit.com/airtel.in",
  "https://logo.clearbit.com/samsung.com",
  "https://logo.clearbit.com/dlf.in",
  "https://logo.clearbit.com/apollohospitals.com",
  "https://logo.clearbit.com/dominos.co.in",
  "https://logo.clearbit.com/hyundai.com",
];

export const CAREERS_DATA = [
  { id: 1, role: "Senior Production Manager", type: "Full Time", location: "Okhla, Delhi", exp: "8-10 Years" },
  { id: 2, role: "Signage Installation Head", type: "Full Time", location: "Delhi NCR", exp: "5+ Years" },
  { id: 3, role: "B2B Sales Executive", type: "Full Time", location: "Mumbai / Bangalore", exp: "2-4 Years" },
];

export const CONTACT_INFO = {
  // Common industrial area for Signage in Delhi, likely location for Hemkunt
  address: "B-20, Okhla Industrial Area, Phase-I, New Delhi - 110020, India",
  phones: ["+91 11 4113 0239", "+91 98100 66557"],
  email: "info@hemkuntsignage.com"
};