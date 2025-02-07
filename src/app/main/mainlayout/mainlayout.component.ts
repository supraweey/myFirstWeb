import { Component } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-mainlayout',
  standalone: false,
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {
  constructor (private router: Router){}
    navToHome() {
      this.router.navigateByUrl('/');
    }
    navToUserLogin() {
      this.router.navigateByUrl('/user-login');
    }
    navToUser() {
      this.router.navigateByUrl('/user');
    }
    
    navToRole() {
      this.router.navigateByUrl('/role');
    }
    

  }


