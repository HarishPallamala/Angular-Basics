import { Component } from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  passVal:string='';
  city:string='';
  users:string[] = [];

  updateCity(val:string){
    console.log(val);
    this.city = val;
  }

  handleUsers(val:string[]){
    console.log(val);
    this.users = val;
  }
}
