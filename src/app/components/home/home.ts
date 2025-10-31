import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  searchTerm: string = '';

  menuItems = [
    {
      title: 'Main Course',
      image: 'https://img.freepik.com/premium-photo/plate-full-fried-chicken-table_1065789-21.jpg',
      route: '/main-course'
    },
    {
      title: 'BBQ',
      image: 'https://s-media-cache-ak0.pinimg.com/originals/ab/5c/c5/ab5cc5d4946fdf4b9d07e192fcd7e5f5.jpg',
      route: '/bbq'
    },
    {
      title: 'Burger',
      image: 'https://tse2.mm.bing.net/th/id/OIP.NNC4s84fFQupeyBng4OsygHaE6?rs=1&pid=ImgDetMain&o=7&rm=3',
      route: '/burger'
    },
    {
      title: 'Momos',
      image: 'https://img.freepik.com/premium-photo/illustration-traditional-dumpling-momos-food-from-nepal-served_756405-57152.jpg?w=2000',
      route: '/momos'
    },
    {
      title: 'Fries',
      image: 'https://img.freepik.com/premium-photo/plate-full-crispy-fries_636537-207010.jpg',
      route: '/fries'
    },
    {
      title: 'Mojito',
      image: 'https://i.pinimg.com/736x/06/fc/7b/06fc7b77cafdac7d5d7f6ecaf1fd58b1.jpg',
      route: '/mojito'
    },
    {
      title: 'Combos',
      image: 'https://tse1.mm.bing.net/th/id/OIP.BX_lOC8PBsXdQXG_a-BW6AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      route: '/combos'
    }
  ];

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  filteredMenuItems() {
    if (!this.searchTerm) {
      return this.menuItems;
    }

    const lowerSearch = this.searchTerm.toLowerCase();
    return this.menuItems.filter(item =>
      item.title.toLowerCase().includes(lowerSearch)
    );
  }
  onSearch() {
    // This will trigger change detection and update the filtered list
    console.log('Searching for:', this.searchTerm);
  }
}