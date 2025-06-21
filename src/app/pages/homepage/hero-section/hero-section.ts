import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  heroImage: string = 'assets/herosection.jpg'; // Sử dụng ảnh có sẵn trong assets

  constructor(private router: Router) {}

  exploreNow(): void {
    // Điều hướng đến trang sản phẩm hoặc trang khám phá
    this.router.navigate(['/products']);
  }

  viewCollection(): void {
    // Điều hướng đến trang bộ sưu tập
    this.router.navigate(['/collections']);
  }
}
