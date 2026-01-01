
// Types for Ghost Gear application
export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  price: string;
  tags: string[];
  status?: 'New' | 'Sold Out' | 'Archived';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
