import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/home.service';
import { CardItem, Post, Product, Quote } from 'src/app/shared/card-helpers/card-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!: CardItem[]
  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.items = this._homeService.getItems();
  }

  isProduct(item: CardItem): item is Product {
    return (item as Product).imageUrl !== undefined;
  }

  isPost(item: CardItem): item is Post {
    return (item as Post).title !== undefined;
  }

  isQuote(item: CardItem): item is Quote {
    return (item as Quote).text !== undefined;
  }
}
