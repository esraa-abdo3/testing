import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { HeroDetail } from './components/hero-detail/hero-detail';
import { Heroes } from './components/heroes/heroes';
import { Counter } from './components/counter/counter';

export const routes: Routes = [
    { path: '',  component: Dashboard },
    { path: 'dashboard', component: Dashboard ,title: 'Dashboard' },
    { path: 'detail/:id', component: HeroDetail, title: 'Hero Detail' },
    { path: 'heroes', component: Heroes, title: 'Heroes' },
  ];