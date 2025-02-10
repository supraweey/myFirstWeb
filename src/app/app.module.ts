import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './main/core.module';
import { UserLoginComponent } from './user/user-login/user-login.component'
import { NgxPullToRefreshModule } from 'ngx-pull-to-refresh';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgxPullToRefreshModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
