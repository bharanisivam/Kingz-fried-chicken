import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bbq } from './components/bbq/bbq';
import { Burger } from './components/burger/burger';
import { Fries } from './components/fries/fries';
import { MainCourse } from './components/main-course/main-course';
import { Momos } from './components/momos/momos';
import { Mojito } from './components/mojito/mojito';
import { Home } from './components/home/home';
import { Combos } from './components/combos/combos';

const routes: Routes = [
  {path:'bbq',component:Bbq},
  {path:'home',component:Home},
  {path:'combos',component:Combos},
  {path:'burger',component:Burger},
  {path:'fries',component:Fries},
  {path:'main-course',component:MainCourse},
  {path:'momos',component:Momos},
  {path:'mojito',component:Mojito},
  {path:'',pathMatch:'full',redirectTo:'/home'},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
