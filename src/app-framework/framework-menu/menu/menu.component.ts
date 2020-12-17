import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app-framework/services/menu.Service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
  }

}
