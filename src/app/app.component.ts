import { Component} from '@angular/core';
import { FrameworkConfigService } from '../app-framework/services/framework-config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService){

  }
}
