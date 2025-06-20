import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { BlogPreview } from './blog-preview/blog-preview';
import { FeaturedSection } from './featured-section/featured-section';

@Component({
  selector: 'app-homepage',
  imports: [HeroSection, BlogPreview, FeaturedSection],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
