import { Component} from '@angular/core';
import { MenuService } from '../app-framework/services/menu.Service';
import { FrameworkConfigService } from '../app-framework/services/framework-config.service';
import { defaultMenuItems } from './DataModel/app.menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService,
                private menuService: MenuService){

      menuService.menu_items = defaultMenuItems;

  }
}
