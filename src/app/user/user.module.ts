import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChildUserComponent } from './child-user/child-user.component';
import { Child2UserComponent } from './child2-user/child2-user.component';
import { Child3UserComponent } from './child3-user/child3-user.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserProfileComponent,
    ChildUserComponent,
    Child2UserComponent,
    Child3UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})

export class UserModule { }
