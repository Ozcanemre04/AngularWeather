import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  countryInput!:string;
  @Output()
   InputEvent:EventEmitter<string> = new EventEmitter();

   OnChange(){
      this.InputEvent.emit(this.countryInput);
      this.countryInput="";
   }
 
}
