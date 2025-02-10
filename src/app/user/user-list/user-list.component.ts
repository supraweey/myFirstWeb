import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(private router: Router){}

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
