import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCard } from '../../data/constants';
import { CommonModule } from '@angular/common';
import { heroShoppingCart, heroHeart } from '@ng-icons/heroicons/outline';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, NgIcon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  providers: [provideIcons({ heroHeart, heroShoppingCart }), NgIcon],
})
export class ProductCardComponent {
  // Nhận dữ liệu sản phẩm từ component cha
  @Input() product: ProductCard | undefined;

  // Gửi sự kiện ra ngoài khi người dùng tương tác
  @Output() addToCart = new EventEmitter<ProductCard>();
  @Output() toggleFavorite = new EventEmitter<ProductCard>();

  isFavorited = false;

  constructor(private router: Router) {}

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

  onProductDetail(id: number): void {
    this.router.navigate(['/products/'+ id]);
    console.log(this.product);
  }
}
