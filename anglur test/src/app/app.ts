import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Messages } from './components/messages/messages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref,Messages],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('test sample - Heroes app');
}
