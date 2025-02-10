import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myFirstWeb';
  targetElement: Element;

  constructor(private router: Router){}

  ngOnInit() {
    this.targetElement = document.querySelector('html');
}
myRefreshEvent(event: Subject<any>, message: string) {
  setTimeout(() => {
      alert(message);
      event.next(false);
  }, 3000);
}

alert(message: string) {
  alert(message);
}
}
