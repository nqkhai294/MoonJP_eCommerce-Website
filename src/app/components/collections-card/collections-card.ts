import { Component, Input } from '@angular/core';
import { CollectionCard } from '../../data/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections-card',
  imports: [CommonModule,],
  templateUrl: './collections-card.html',
  styleUrl: './collections-card.scss'
})
export class CollectionsCard {
  @Input() collection!: CollectionCard;
}
