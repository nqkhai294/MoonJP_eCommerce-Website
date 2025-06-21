import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from '../../../data/mock-products';
import { ProductCardComponent } from '../../../components/product-card/product-card';

@Component({
  selector: 'app-featured-section',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './featured-section.html',
  styleUrl: './featured-section.scss'
})
export class FeaturedSection {
  products = MOCK_PRODUCTS
  top_products = this.products.slice(0, 4); // Lấy 4 sản phẩm đầu tiên để hiển thị
}
