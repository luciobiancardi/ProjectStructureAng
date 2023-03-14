import { Injectable } from '@angular/core';
import { CardItem, Post, Product, Quote } from '../shared/card-helpers/card-item.model';

@Injectable()
export class HomeService {
  public getItems(): CardItem[] {
    return [
      {
        title: 'My first post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ipsum in felis consequat vulputate.',
        author: 'John Doe',
        date: '2022-01-01'
      } as Post,
      {
        name: 'Product A',
        description: 'This is a great product that will solve all your problems.',
        price: 9.99,
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_879794-MLA52004395332_102022-O.webp'
      } as Product,
      {
        text: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs',
        date: '2022-02-15'
      } as Quote,
      {
        title: 'My second post',
        content: 'Sed vel ante justo. Donec auctor elit nec sapien tristique, ut hendrerit mauris venenatis. Nulla pharetra purus enim, eget cursus est dapibus eu.',
        author: 'Jane Smith',
        date: '2022-03-05'
      } as Post,
      {
        name: 'Product B',
        description: 'This is another great product that will solve all your problems.',
        price: 19.99,
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_805951-MLA50865156506_072022-F.webp'
      } as Product,
      {
        text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        author: 'Winston Churchill',
        date: '2022-04-10'
      } as Quote,
    ];
  }
}