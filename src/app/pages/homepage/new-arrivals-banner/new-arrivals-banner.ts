import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-arrivals-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrivals-banner.html',
  styleUrls: ['./new-arrivals-banner.scss']
})
export class NewArrivalsBannerComponent {
  imageUrl: string = '/assets/inspiration.jpg'; // Đường dẫn đến ảnh của bạn
}
