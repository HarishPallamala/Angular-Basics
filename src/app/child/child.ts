import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() data:string = '';
  @Input() city:string='';
  @Output() getUsers = new EventEmitter();
  users:string[] = ['Hari','Obj2','Obj3'];

  ngOnInit(){
    this.getUsers.emit(this.users); // instead on loading component we can emmit when use clicks button in child component using method
  }
}
