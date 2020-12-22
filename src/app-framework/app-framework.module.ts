import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FrameworkContentComponent } from './framework-content/framework-content.component';
import { FrameworkHeaderComponent } from './Framework-headerbar/framework-header/framework-header.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { MenuService } from './services/menu.Service';
import { MenuComponent } from './framework-menu/menu/menu.component';
import { MenuItemComponent } from './framework-menu/menu-item/menu-item.component';
import { TopBarComponent } from './Framework-headerbar/top-bar/top-bar.component';



@NgModule({
  declarations: [
    FrameworkBodyComponent,
    FrameworkContentComponent,
    FrameworkHeaderComponent,
    MenuComponent,
    MenuItemComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FrameworkBodyComponent
  ],
  providers:[
    FrameworkConfigService,
    MenuService
  ]
})
export class AppFrameworkModule { }
