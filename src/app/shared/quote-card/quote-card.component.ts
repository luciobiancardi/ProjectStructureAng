import { Component, Input } from '@angular/core';
import { Quote } from 'src/app/shared/card-helpers/card-item.model';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent {
  @Input() item!: Quote

}
