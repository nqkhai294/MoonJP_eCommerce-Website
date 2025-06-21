import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroHeart } from '@ng-icons/heroicons/outline';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { heroShoppingBag } from '@ng-icons/heroicons/outline';
import { heroUser } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIcon, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [
    provideIcons({ heroHeart, heroMagnifyingGlass, heroShoppingBag, heroUser }),
    NgIcon,
  ],
})
export class Header {
  constructor(private router: Router) {}

  onNavigate() {
    this.router.navigate(['/']);
  }

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  navigateToCollections() {
    this.router.navigate(['/collections']);
  }

  navigateToInspiration() {
    this.router.navigate(['/inspiration']);
  }

  navigateToAboutUs() {
    this.router.navigate(['/about-us']);
  }
}
