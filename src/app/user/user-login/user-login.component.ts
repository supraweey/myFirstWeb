import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  constructor(private router: Router){}
  @ViewChild('usernameText') usernameText!: ElementRef;
  @ViewChild('passwordText') passwordText!: ElementRef;
  errorText = ""
  isErrorVisible: boolean = false;

  handleNextAction(usernameText: string, passwordText: string): void {
  
    console.log(this.validateUserName(usernameText))
    console.log(this.validatePassword(passwordText))
    if(this.validateUserName(usernameText) == true && this.validatePassword(passwordText) == true){
      this.navToProfile(usernameText, passwordText)
    }
    else if(this.validateUserName(usernameText) == false && this.validatePassword(passwordText) == false){
      this.errorText = "UserName and Password"
      this.makeErrorUserName()
      this.makeErrorPassword()
    }
    else if(this.validateUserName(usernameText) == false) {
      this.errorText = "UserName"
      this.makeErrorUserName()
    }
    else if(this.validatePassword(passwordText) == false) {
       this.errorText = "Password"
      this.makeErrorPassword()
    }
    
  }

  validateUserName(usernameText: string): boolean {
    const usernameRegex = /^[a-zA-Z]{6,}$/;
    if (usernameRegex.test(usernameText.trim())) {
      return true; 
    }
    return false

  }


  validatePassword(passwordText: string): boolean {
    const passwordRegex = /^\d{8}$/;
    if (passwordRegex.test(passwordText.trim())) {
      return true; 
    }
    return false

  }

  navToProfile(username: String, password: String) {
    this.router.navigate(['user/profile'], {
      queryParams: {
        userName: username,
        password: password
      }
    }) ;
  }

  makeErrorUserName(){
    this.isErrorVisible = true
    this.usernameText.nativeElement.style.border = '2px solid red';
  }

  makeErrorPassword(){
    this.isErrorVisible = true
    this.passwordText.nativeElement.style.border = '2px solid red';
  }

  onInputFocus() {
    this.isErrorVisible = false
    this.usernameText.nativeElement.style.border = '1px solid #ced4da';
    this.passwordText.nativeElement.style.border = '1px solid #ced4da';
  }

}
