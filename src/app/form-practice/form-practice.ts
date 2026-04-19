import { Component, signal } from '@angular/core';
import { LoginData } from '../../models/formLayout';
import { form,FormField } from '@angular/forms/signals';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-practice',
  imports: [FormField, FormsModule, NgIf],
  templateUrl: './form-practice.html',
  styleUrl: './form-practice.css',
})

export class FormPractice {

 loginModel = signal<LoginData>({
  email: '',
  password: '',
});

 loginForm = form(this.loginModel);

 addUser(val:NgForm){ //val will NgForm type if you are not sure specify as any
  console.log(val)

 }

}
