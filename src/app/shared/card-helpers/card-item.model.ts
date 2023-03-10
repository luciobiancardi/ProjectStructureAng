export type CardItem = Product | Post | Quote;

export interface Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface Post {
    title: string;
    content: string;
    author: string;
    date: string;
}

export interface Quote {
    text: string;
    author: string;
}