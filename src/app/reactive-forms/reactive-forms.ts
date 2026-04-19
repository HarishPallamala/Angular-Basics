import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  name = new FormControl();//can set default value -> new FormControl('default value here');
  password = new FormControl();

  profileForm = new FormGroup({
    nameGrp: new FormControl('',[Validators.required, Validators.minLength(3)]),
    passwordGrp: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  });

  getValuesOnConsole(){
    console.log("Name:",this.name.value); // to set avlue to any formControl field -> this.name.setValue
    console.log("Password:",this.password.value);

    console.log("FormGroup:",this.profileForm.value); // to set values ->
    // profileForm.setValue({
    //nameGrp:'valueHere',
    //passwordGrp:'valueHere'
    //})
    // to get only one feild from FormGroup -> this.profileForm.value.nameGrp
  }

  get nameGrp(){
    return this.profileForm.get('nameGrp');
  }
  get passwordGrp(){
    return this.profileForm.get('passwordGrp');
  }
  get emailVal(){
    return this.profileForm.get('email');
  }
}
