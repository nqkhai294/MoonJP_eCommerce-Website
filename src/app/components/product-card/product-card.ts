import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCard } from '../../data/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  // Nhận dữ liệu sản phẩm từ component cha
  @Input() product: ProductCard | undefined;

  // Gửi sự kiện ra ngoài khi người dùng tương tác
  @Output() addToCart = new EventEmitter<ProductCard>();
  @Output() toggleFavorite = new EventEmitter<ProductCard>();

  isFavorited = false;

  onAddToCartClick(): void {
    if (this.product) {
      this.addToCart.emit(this.product);
    }
  }

  onToggleFavoriteClick(): void {
    if (this.product) {
      this.isFavorited = !this.isFavorited;
      this.toggleFavorite.emit(this.product);
    }
  }
}
