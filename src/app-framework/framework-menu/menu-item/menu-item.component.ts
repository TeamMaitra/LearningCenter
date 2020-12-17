import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app-framework/services/menu.Service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem;
  constructor() { }

  ngOnInit(): void {
  }

}
