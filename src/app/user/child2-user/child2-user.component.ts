import { Component } from '@angular/core';
import {CoreDataService} from '../../main/core-data.service';

@Component({
  selector: 'app-child2-user',
  standalone: false,
  templateUrl: './child2-user.component.html',
  styleUrl: './child2-user.component.css'
})
export class Child2UserComponent {
  constructor(private coreDataService: CoreDataService){}

  setValueUser() {
    this.coreDataService.subValueUser.next('USER CHILD2');
  }

  setValuePass() {
    this.coreDataService.subValuePass.next('PASS CHILD2');
  }

}
