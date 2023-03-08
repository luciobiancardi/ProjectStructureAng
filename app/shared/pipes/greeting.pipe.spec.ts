import { GreetingPipe } from '../pipes/greeting.pipe';

describe('GreetingPipe', () => {
  it('create an instance', () => {
    const pipe = new GreetingPipe();
    expect(pipe).toBeTruthy();
  });
});
