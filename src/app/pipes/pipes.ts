import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  // import CommonModule in latest versions to work with pipes
  // lazyloading is implemented for this component, so it will load only when we navigate to that route -> how to check -> network tab in dev tools and check for pipes.js file before and after navigating to that route
  title:string = 'Some CAPS some LOW';
  date = new Date();
  ammount = 56;
}
