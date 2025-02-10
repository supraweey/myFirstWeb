import { Component } from '@angular/core';
import {CoreDataService} from '../../main/core-data.service';

@Component({
  selector: 'app-child-user',
  standalone: false,
  templateUrl: './child-user.component.html',
  styleUrl: './child-user.component.css'
})
export class ChildUserComponent {
  constructor(private coreDataService: CoreDataService){}

  setValueUser() {
    this.coreDataService.subValueUser.next('USER CHILD1');
  }

  setValuePass() {
    this.coreDataService.subValuePass.next('PASS CHILD1');
  }
}
