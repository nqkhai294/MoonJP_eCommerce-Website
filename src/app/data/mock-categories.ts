// src/app/data/mock-categories.ts

import { CategoryCard } from "./constants";



// Mảng chứa dữ liệu giả
export const MOCK_CATEGORIES: CategoryCard[] = [
  {
    id: 1,
    categoryName: 'Vòng tay',
    productCount: 45,
    imageUrl: 'assets/vongtay.jpg' // Đường dẫn đến ảnh của bạn
  },
  {
    id: 2,
    categoryName: 'Dây chuyền',
    productCount: 32,
    imageUrl: 'assets/Vongco.jpg'
  },
  {
    id: 3,
    categoryName: 'Bông tai',
    productCount: 58,
    imageUrl: 'assets/hoatai2.jpg'
  },
  {
    id: 4,
    categoryName: 'Nhẫn',
    productCount: 24,
    imageUrl: 'assets/nhan.jpg'
  },
  {
    id: 5,
    categoryName: 'Phụ kiện tóc',
    productCount: 19,
    imageUrl: 'assets/tramcaitoc.jpg' // Để trống để test placeholder
  },
  {
    id: 6,
    categoryName: 'Trâm cài áo',
    productCount: 15,
    imageUrl: 'assets/Tramcaiao.jpg'
  }
]; 

