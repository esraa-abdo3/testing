import {  Component, inject, OnInit, signal, Signal } from '@angular/core';

import { IHero } from '../../models/ihero';
import { HeroService } from '../../services/hero-service/hero.service';
import { Hero} from '../hero/hero';
@Component({
    selector: 'app-heroes',
    imports: [Hero],
    templateUrl: './heroes.html',
    styleUrls: ['./heroes.css']
})
export class Heroes implements OnInit {
  heroes=signal<IHero[]>([])
  
  private heroService= inject( HeroService)
  

  ngOnInit() {
    this.getHeroes()    
  }
  
  getHeroes(): void {
     this.heroService.getHeroes().subscribe({next:(data)=>{
      this.heroes.set(data)
    }})
    ;
  }

  add(name: string,strength:number = 11): void {
    name = name.trim();
    if (!name) { return; }
    
      this.heroService.addHero({ name, strength } as IHero).subscribe({next:(data)=>{
        console.log(data);
        
      }})
  }

  delete(hero: IHero): void {
    this.heroService.deleteHero(hero).subscribe({next:(data)=>{
        console.log(data);
        
      }})
  }

}


