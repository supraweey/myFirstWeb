import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  private userName: string;
  private password: string;

  public subValueUser: Subject<string> = new Subject<string>();
  public subValuePass: Subject<string> = new Subject<string>();
  
  public passToChild: Subject<string> = new Subject<string>();

  constructor() { }

  set setUserName(data: string) {
    this.userName = data;
  }

  get getUserName() {
    return this.userName;
  }

  set setPassword(data: string) {
    this.password = data;
  }

  get getPassword() {
    return this.password;
  }

  clearValue() {
    this.userName = null;
    this.password = null;
  }
}
