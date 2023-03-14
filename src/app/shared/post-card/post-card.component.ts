import { Component, Input } from '@angular/core';
import { Post } from 'src/app/shared/card-helpers/card-item.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() item!: Post

  constructor() {
    console.log(this.item)
  }

}
