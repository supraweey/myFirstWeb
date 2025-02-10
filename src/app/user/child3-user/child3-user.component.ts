import { Component, OnInit } from '@angular/core';
import {CoreDataService} from '../../main/core-data.service';

@Component({
  selector: 'app-child3-user',
  standalone: false,
  templateUrl: './child3-user.component.html',
  styleUrl: './child3-user.component.css'
})
export class Child3UserComponent implements OnInit {
  textModel: any;

  constructor(private coreDataService: CoreDataService){}

  ngOnInit(): void {
    this.coreDataService.passToChild.subscribe((res) => {
      this.textModel = res;
    })
  }
}
