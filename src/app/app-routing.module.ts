import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './main/mainlayout/mainlayout.component';

const routes: Routes = [
  {
    path : '',
    component : MainlayoutComponent,
    children : [
     {
      path : 'user',
      loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
