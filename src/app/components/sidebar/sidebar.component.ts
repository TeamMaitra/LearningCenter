import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'shopping_shop', class: '' },
    { path: '/icons', title: 'Courses',  icon:'education_hat', class: '' },
    { path: '/maps', title: 'Training',  icon:'business_bulb-63', class: '' },
    { path: '/notifications', title: 'Statistics',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'Settings',  icon:'ui-1_settings-gear-63', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
