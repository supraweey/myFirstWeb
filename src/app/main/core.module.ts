import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    MainlayoutComponent
  ],
  imports: [
    CommonModule, CoreRoutingModule
  ]
})
export class CoreModule { }
