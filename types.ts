
export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  target: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}
