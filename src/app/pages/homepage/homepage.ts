import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { FeaturedSection } from './featured-section/featured-section';
import { MOCK_CATEGORIES } from '../../data/mock-categories';
import { CategoryCardComponent } from '../../components/category-card/category-card';
import { CommonModule } from '@angular/common';
import {NewArrivalsBannerComponent } from './new-arrivals-banner/new-arrivals-banner';

@Component({
  selector: 'app-homepage',
  imports: [
    HeroSection,
    FeaturedSection,
    CategoryCardComponent,
    CommonModule,
    NewArrivalsBannerComponent,
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  categories = MOCK_CATEGORIES;

  
  
}
