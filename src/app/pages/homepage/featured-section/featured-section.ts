import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MOCK_PRODUCTS } from '../../../data/mock-products';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { ProductServices } from '../../../services/productServices';
import { ProductCard } from '../../../data/constants';

@Component({
  selector: 'app-featured-section',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './featured-section.html',
  styleUrl: './featured-section.scss',
})
export class FeaturedSection implements OnInit {
  constructor(private productService: ProductServices) {}

  products: ProductCard[] = [];
  top_products: ProductCard[] = [];

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.top_products = this.products.slice(0, 4);
    });
  }
}
