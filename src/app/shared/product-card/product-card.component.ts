import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/card-helpers/card-item.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() item!: Product
}
