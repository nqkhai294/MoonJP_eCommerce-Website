import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { CategoryCard } from '../../data/constants';

@Component({
  selector: 'app-category-card',
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss',
})
export class CategoryCardComponent {
  @Input() cateCard: CategoryCard = {
    id: 0,
    categoryName: '',
    productCount: 0,
    imageUrl: '',
  };

  constructor() {
    // Bạn có thể thực hiện các thao tác khởi tạo khác ở đây nếu cần
  }
}
