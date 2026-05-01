import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.html',
  styleUrl: './status.css'
})
export class Status {
  status = signal(0);
  isLiked = signal(false);

  toggleLike() {
    this.isLiked .set( !this.isLiked())
    this.status.update(value => value + (this.isLiked() ? 1 : -1));
  }
}