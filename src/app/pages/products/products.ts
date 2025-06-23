import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card';
import {
  heroFunnel,
  heroChevronUp,
  heroChevronDown,
  heroMagnifyingGlass,
} from '@ng-icons/heroicons/outline';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ProductCard, CategoryCard } from '../../data/constants';
import { FormsModule } from '@angular/forms';
import { MOCK_CATEGORIES } from '../../data/mock-categories';
import { ProductServices } from '../../services/productServices';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, NgIcon, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  providers: [
    provideIcons({
      heroFunnel,
      heroChevronUp,
      heroChevronDown,
      heroMagnifyingGlass,
    }),
    NgIcon,
  ],
})
export class Products implements OnInit {
  masterProductList: ProductCard[] = [];
  filteredProducts: ProductCard[] = [];
  categories: CategoryCard[] = MOCK_CATEGORIES;
  materials = ['Bạc 925', 'Bạc mạ vàng', 'Ngọc trai Akoya', 'Đá tự nhiên'];
  colors = ['Hồng', 'Trắng', 'Bạc', 'Vàng', 'Đen'];

  constructor(private productService: ProductServices) {}

  // Filter state
  searchTerm: string = '';
  selectedCategories: { [key: string]: boolean } = {};
  selectedMaterials: { [key: string]: boolean } = {};
  selectedColors: { [key: string]: boolean } = {};
  priceValue: number = 1000000;

  showFilters = true;

  currentPage = 1;
  itemsPerPage = 12;
  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.masterProductList = products;
      
    });

    this.applyFilters();
  }

  applyFilters(): void {
    let products = [...this.masterProductList];

    // 1. Filter by Search Term
    if (this.searchTerm) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // 2. Filter by Category
    const activeCategories = Object.keys(this.selectedCategories).filter(
      (k) => this.selectedCategories[k]
    );
    if (activeCategories.length > 0) {
      products = products.filter((p) => activeCategories.includes(p.category));
    }

    // 3. Filter by Price
    products = products.filter((p) => p.price <= this.priceValue);

    // 4. Filter by Material
    const activeMaterials = Object.keys(this.selectedMaterials).filter(
      (k) => this.selectedMaterials[k]
    );
    if (activeMaterials.length > 0) {
      products = products.filter((p) => activeMaterials.includes(p.material));
    }

    // 5. Filter by Color
    const activeColors = Object.keys(this.selectedColors).filter(
      (k) => this.selectedColors[k]
    );
    if (activeColors.length > 0) {
      products = products.filter((p) => activeColors.includes(p.color));
    }

    this.filteredProducts = products;
    this.goToPage(1); // Reset to first page after filtering
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategories = {};
    this.selectedMaterials = {};
    this.selectedColors = {};
    this.priceValue = 1000000;
    this.applyFilters();
  }

  paginatedProducts(): ProductCard[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  onClickFilter() {
    this.showFilters = !this.showFilters;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    } else if (this.filteredProducts.length === 0) {
      this.currentPage = 1;
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  get startIndex(): number {
    if (this.filteredProducts.length === 0) return 0;
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endIndex(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.filteredProducts.length
    );
  }
}
