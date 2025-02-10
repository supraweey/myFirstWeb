import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CoreDataService} from '../../main/core-data.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {
  userName: string;
  password: string;

  textModel: any;

  constructor(
    private router: Router,
    private coreDataService: CoreDataService){}

  ngOnInit():void {
    const temp = localStorage.getItem('user');
    if(temp) {
      const obj = JSON.parse(temp);
    }

    this.coreDataService.subValueUser.subscribe((res) => {
      this.userName = res;
    })
    this.coreDataService.subValuePass.subscribe((res) => {
      this.userName = res;
    })
  }

  ngOnDestroy():void {
    localStorage.clear();
    this.coreDataService.subValueUser.unsubscribe();
    this.coreDataService.subValuePass.unsubscribe();
  }

  submitClick() {
    this.textModel = 'User :' + this.userName + ' , Pass : ' + this.password;

    this.coreDataService.passToChild.next(this.textModel);
  }

  setValue() {
    this.coreDataService.setUserName = this.userName;
    this.coreDataService.setPassword = this.password;
  }

  getValue() {
    this.textModel = 'User : ' + this.coreDataService.getUserName + ' , Pass : ' + this.coreDataService.getPassword;
  }

  setTempValue() {
    this.coreDataService.setUserName = 'TEMPORARY';
    this.coreDataService.setPassword = 'TEMPORARY';
  }

  clearValue() {
    this.coreDataService.clearValue;
  }

  navToAdd() {
    this.router.navigateByUrl('user/add')

  }

  changePage() {
    this.router.navigateByUrl('user/add', {
      state: {
        data: 'test'
      }
    });
  }

}
