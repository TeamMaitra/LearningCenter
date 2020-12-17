import { Injectable } from '@angular/core';

export interface MenuItem {
    text: string,
    icon: string,
    route: string,
    submenu: Array<MenuItem>
}

@Injectable()
export class MenuService {

    menu_items : Array<MenuItem>;

}
