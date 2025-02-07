import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  constructor(private router: ActivatedRoute){}

  displayedUsername = '';
  displayedPassword = '';

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => {
      const userName = params.get('userName');
      const password = params.get('password');

      this.displayedUsername = userName ?? "Guest"
      this.displayedPassword = password ?? "Guest"

      console.log('User ID:', userName);
      console.log('Password:', password);
    });
  }
}
