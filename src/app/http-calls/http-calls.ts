import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceCode } from '../Services/service-code';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-calls',
  imports: [CommonModule],
  templateUrl: './http-calls.html',
  styleUrl: './http-calls.css',
})
export class HttpCalls {
  productsData:any;
  productsData$: any;

  constructor(private service:ServiceCode, private cdr: ChangeDetectorRef){
  }
  ngOnInit(){
    this.service.getTodos().subscribe((data:any)=>{
      this.productsData = data.products;
      console.log(data);
      this.productsData$ = this.service.getTodos();
      this.cdr.detectChanges();
    });
  }
}
