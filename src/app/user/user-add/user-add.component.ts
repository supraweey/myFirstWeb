import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-user-add',
  standalone: false,
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit{
  constructor(private router: Router){}

  storeData: any;
  arrayList: any[];

  list2: any[];
  objRes: any;

  ngOnInit(): void {
    this.storeData = history.state.data;
  }

  async getClick() {
    const url = 'https://67a48109c0ac39787a1b777b.mockapi.io/demo';

    await axios
      .get(url)
      .then((res) => {
        console.log('Success');
        //this.arrayList = res.data;
        const temp = res.data;
        this.arrayList = temp.filter((x: any) => x.status === 300);
      })
      .catch((error: any) => {
        console.error('Failed to getDetail => ' + error);
      });
  }

  async postClick() {
    const url = 'https://67a48109c0ac39787a1b777b.mockapi.io/demo';
    const payload = { id: 25};
    const header = {
      headers: {
        accept: '*/*',
      },
    };

    await axios
    .get(url)
    .then((res) => {
      console.log('Success');
      this.objRes = res.data
    })
    .catch((error: any) => {
      console.warn;
    });
  }

  onClear() {
    
  }

}
