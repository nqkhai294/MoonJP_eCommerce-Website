import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableLike, of } from 'rxjs';
import { ProductCard } from '../data/constants';
import { MOCK_PRODUCTS } from '../data/mock-products';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private productsSubject = new BehaviorSubject<ProductCard[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor() {}

  getAllProducts(): Observable<ProductCard[]> {
    // Neu da co cache, khong nap lai
    if (this.productsSubject.value.length > 0) {
      return this.products$;
    } else {
      this.productsSubject.next(MOCK_PRODUCTS);
      return this.products$;
    }
  }

  getProductById(id: number): Observable<ProductCard | undefined> {
    // Nếu có cache → tìm luôn
    const cached = this.productsSubject.value;
    if (cached.length > 0) {
      return of(cached.find((p) => p.id === id));
    } else {
      // Nếu chưa có → load toàn bộ rồi tìm
      this.getAllProducts(); // load vào cache
      return of(MOCK_PRODUCTS.find((p) => p.id === id));
    }
  }

  getRelatedProducts(category: string): Observable<ProductCard[] | undefined> {
    const cached = this.productsSubject.value;
    if (cached.length > 0) {
      return of(cached.filter((p) => p.category === category));
    } else {
      
      this.getAllProducts(); // load vào cache
      return of(MOCK_PRODUCTS.filter((p) => p.category === category));
    }
  }

  clearCache() {
    this.productsSubject.next([]);
  }
}
