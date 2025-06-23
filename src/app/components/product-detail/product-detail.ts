import { Component, Input } from '@angular/core';
import { ProductCard } from '../../data/constants';
import { ProductServices } from '../../services/productServices';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  providers: [
    provideIcons({
      heroChevronRight
    }),
    NgIcon,
  ],
})
export class ProductDetail {
  @Input() product: ProductCard | undefined;

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
  }

  onNavigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
