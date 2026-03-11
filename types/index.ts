export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    imageUrl: string;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: 'ADMIN' | 'CUSTOMER';
  }
  
  export interface CartItem {
    id: number;
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }
  
  export interface Cart {
    id: number;
    userId: number;
    items: CartItem[];
    total: number;
  }
  
  export interface Order {
    id: number;
    userId: number;
    items: CartItem[];
    totalAmount: number;
    status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
    createdAt: string;
  }
