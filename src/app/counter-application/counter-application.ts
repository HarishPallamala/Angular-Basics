import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter-application',
  imports: [],
  templateUrl: './counter-application.html',
  styleUrl: './counter-application.css',
})
export class CounterApplication {
  count: number = 0;
  signalCounter:WritableSignal<number> = signal(0); // WritableSignal -> set update ....
  readOnly:Signal<number> = computed(()=>20) //ComputedSignal -> readOnly... like constants but there is a way to change computed signal values?
  // if computed signal is depended on other singnal and if that values changes -> in computed ssignal also value changes
  compVal = computed(()=>66); //ComputedSignal
  x=50
  y=50
  z=this.x + this.y; // if we change any of x y in method z val stll remains 100 only as only x/y value changes not z

  sigX = signal<number>(50); // WritableSignal
  sigY = signal(50); // WritableSignal
  sigZ = computed(()=> this.sigX() + this.sigY()); //ComputedSignal, sigZ.set(100)-> err, sigZ.update(()=>100)-> err

  constructor(){
    effect(()=>{
      console.log("SigZ:", this.sigZ())
    })
  }
  handle(val: string) {
    if (val === 'inc') {
      this.count = this.count + 1;
      this.signalCounter.set(this.signalCounter() + 1)
    } else if (val === 'dec') {
      this.count = this.count - 1;
      this.signalCounter.set(this.signalCounter() - 1)
    } else {
      this.count = 0;
      this.signalCounter.set(0)
    }
  }

  updateSinalValue(){
    console.log("Before SigX updated sigZ:", this.sigZ())
    this.sigX.set(100);
    console.log("After SigX updated sigZ:", this.sigZ())
  }
}
