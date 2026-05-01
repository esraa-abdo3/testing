import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.css'],
})
export class Counter  {
  counter = signal(0);
  increase() {
    this.counter.update(value=>value+1)
  }
  
  decrease() {
    this.counter.update(value=>value-1)
  }
}
