import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: string; // Used for scrolling or page switching
  isPage?: boolean;
}

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}
