import { Component, Input } from '@angular/core';
import { ProductCard } from '../../data/constants';
import { ProductServices } from '../../services/productServices';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroArrowPath,
  heroChevronRight,
  heroHeart,
  heroShare,
  heroShieldCheck,
  heroShoppingCart,
  heroTruck,
} from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { heroHeartSolid } from '@ng-icons/heroicons/solid'; // Import solid
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIcon, CommonModule, ProductCardComponent],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  providers: [
    provideIcons({
      heroChevronRight,
      heroHeart,
      heroShare,
      heroShoppingCart,
      heroHeartSolid: heroHeartSolid,
      heroTruck,
      heroShieldCheck,
      heroArrowPath,
    }),
    NgIcon,
  ],
})
export class ProductDetail {
  @Input() product: ProductCard | undefined;

  relatedProducts: ProductCard[] | undefined;

  isLiked = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  constructor(
    private productService: ProductServices,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((item) => {
      this.product = item ? item : undefined;
    });
    console.log(this.product);

    if (this.product?.category) {
      this.productService
        .getRelatedProducts(this.product.category)
        .subscribe((items) => {
          this.relatedProducts = items;
        });
    }
  }

  onNavigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  get discountAmount(): number | null {
    if (this.product?.originalPrice != null && this.product?.price != null) {
      return this.product.originalPrice - this.product.price;
    }
    return null;
  }
}
