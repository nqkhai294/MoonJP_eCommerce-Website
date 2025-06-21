// Định nghĩa một "interface" để đảm bảo mọi object category đều có cấu trúc giống nhau
export interface CategoryCard {
  id: number;
  categoryName: string;
  productCount: number;
  imageUrl: string;
}

export interface ProductCard {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    rating: number;
    reviewCount: number;
    originalPrice?: number; // Optional field for original price
    isNew?: boolean; // Optional field to indicate if the product is new
    isOnSale?: boolean; // Optional field to indicate if the product is on sale
}