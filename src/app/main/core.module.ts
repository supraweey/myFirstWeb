import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { CoreRoutingModule } from './core-routing.module';
import { CoreDatComponent } from './core-data/core-data.component';



@NgModule({
  declarations: [
    MainlayoutComponent,
    CoreDatComponent
  ],
  imports: [
    CommonModule, CoreRoutingModule
  ]
})
export class CoreModule { }
