import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FrameworkContentComponent } from './framework-content/framework-content.component';
import { FrameworkHeaderComponent } from './framework-header/framework-header.component';
import { FrameworkConfigService } from './services/framework-config.service';



@NgModule({
  declarations: [
    FrameworkBodyComponent,
    FrameworkContentComponent,
    FrameworkHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FrameworkBodyComponent
  ],
  providers:[
    FrameworkConfigService
  ]
})
export class AppFrameworkModule { }
