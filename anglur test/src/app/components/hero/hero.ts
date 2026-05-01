import { Component, input, Input } from '@angular/core';
import { IHero } from '../../models/ihero';

@Component({
  selector: 'app-hero',  
  templateUrl: './hero.html',
  styleUrls:  ['./hero.css'],  
})
export class Hero {
  @Input() hero!: IHero;
  // hero= input<IHero>() //new syntax;
}
