import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from '../../data/mock-products';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card';
import {
  heroFunnel,
  heroChevronUp,
  heroChevronDown,
} from '@ng-icons/heroicons/outline';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ProductCard } from '../../data/constants';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, NgIcon],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  providers: [
    provideIcons({ heroFunnel, heroChevronUp, heroChevronDown }),
    NgIcon,
  ],
})
export class Products {
  productsList: ProductCard[] = MOCK_PRODUCTS;

  showFilters = true;

  currentPage = 1;
  itemsPerPage = 10;
  get totalPages(): number {
    return Math.ceil(this.productsList.length / this.itemsPerPage);
  }

  paginatedProducts(currentPage: number): ProductCard[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.productsList.slice(start, start + this.itemsPerPage);
  }

  onClickFilter() {
    this.showFilters = !this.showFilters;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  get startIndex(): number {
  return (this.currentPage - 1) * this.itemsPerPage + 1;
}

get endIndex(): number {
  return Math.min(this.currentPage * this.itemsPerPage, this.productsList.length);
}

}
