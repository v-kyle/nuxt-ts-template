import { Mutation, State } from 'vuex-simple';

export default class Counter {
  @State()
  public value: number = 0;

  @Mutation()
  public increment(n = 1): void {
    this.value = this.value + n;
  }

  @Mutation()
  decrement(n = 1): void {
    this.value = this.value - n;
  }

  public incrementValueRandomlyAndAsync(): void {
    const newValue = Math.floor(Math.random() * 10);
    setTimeout(() => {
      this.increment(newValue);
    }, 1234);
  }
}
