import { Component } from '@angular/core';

@Component({
  selector: 'app-combos',
  standalone: false,
  templateUrl: './combos.html',
  styleUrl: './combos.css',
})
export class Combos {
  comboOffers = [
    {
      title: 'KINGZ SINGLE COMBO',
      description: 'Chicken Burger + Chicken Shots + Mojito',
      price: 199
    },
    {
      title: 'KINGZ COUPLE COMBO',
      description: 'Chicken Mini Burgers + Chicken Lollipop + Chicken Momos + Mojito',
      price: 299
    },
    {
      title: 'KINGZ COMBO',
      description: 'Chicken Burger + BBQ Chicken Lollipop + Mojito',
      price: 299
    },
    {
      title: 'KINGZ ALL IN COMBO',
      description: 'Fried Chicken Lollipop + BBQ Chicken Lollipop + French Fries + Mojito',
      price: 399
    }
  ];

}

