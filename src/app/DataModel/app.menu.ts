import { MenuItem } from '../../app-framework/services/menu.Service';


export let defaultMenuItems : Array<MenuItem> = [

  {
    text: 'Home',
    icon: 'Home',
    route: '/home',
    submenu: null

  },
  {
    text: 'Dashboard',
    icon: 'Dashboard',
    route: '/Dashboard',
    submenu: null

  },
  {
    text: 'Classes',
    icon: 'Classes',
    route: '/Classes',
    submenu: null

  },
  {
    text: 'Learning Plan',
    icon: 'Learning',
    route: '/LearningPlan',
    submenu: null

  },
  {
    text: 'Settings',
    icon: 'Settings',
    route: '/Settings',
    submenu: null

  }
];
