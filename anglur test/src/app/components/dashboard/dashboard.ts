import { Component, inject, OnInit, signal } from '@angular/core';
import { IHero } from '../../models/ihero';
import { HeroService } from '../../services/hero-service/hero.service';
import { StrengthPipe } from '../../pipes/strength/strength-pipe';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [StrengthPipe, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  heroes = signal<IHero[]>([]);

  private heroService = inject(HeroService);

  ngOnInit() {
    this.heroService.getHeroes().pipe(map((heroes) => heroes.slice(1, 5))).subscribe({
        next: (data) => {
          this.heroes.set(data);
        },
      });
  }
}
