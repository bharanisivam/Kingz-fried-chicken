import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuList } from './components/menu-list/menu-list';
import { Home } from './components/home/home';
import { MainCourse } from './components/main-course/main-course';
import { Fries } from './components/fries/fries';
import { Momos } from './components/momos/momos';
import { Burger } from './components/burger/burger';
import { Bbq } from './components/bbq/bbq';
import { Mojito } from './components/mojito/mojito';
import { Combos } from './components/combos/combos';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MenuList,
    Home,
    MainCourse,
    Fries,
    Momos,
    Burger,
    Bbq,
    Mojito,
    Combos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
