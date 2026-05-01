import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

import { IHero } from '../../models/ihero';
import { HeroService } from '../../services/hero-service/hero.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-detail.html',
  styleUrls: ['./hero-detail.css'],
})
export class HeroDetail implements OnInit {
  private route = inject(ActivatedRoute);

  private heroService = inject(HeroService);
  private location = inject(Location);

  hero = signal<IHero | null>(null);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => this.hero.set(hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero()!).subscribe(() => this.goBack());
  }
}
