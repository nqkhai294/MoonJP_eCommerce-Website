import { Component } from '@angular/core';
import { CollectionsCard } from '../../components/collections-card/collections-card';
import { CommonModule } from '@angular/common';
import { MOCK_COLLECTIONS } from '../../data/mock-collections';

@Component({
  selector: 'app-collections',
  imports: [CollectionsCard, CommonModule],
  templateUrl: './collections.html',
  styleUrl: './collections.scss'
})
export class Collections {
  collections = MOCK_COLLECTIONS
}
