import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {
  private greetingMessages: string[] = [
    'Hello',
    'Hey',
    'Cheers',
    'Hi there',
    'Hola',
  ];

  transform(name: string): string {
    const randomIndex = Math.floor(Math.random() * this.greetingMessages.length);
    const randomGreeting = this.greetingMessages[randomIndex];
    return `${randomGreeting} ${name}`;
  }

}
