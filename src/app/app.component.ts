import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number = 0
  updateAt?: number
 public get inDesablet(): boolean{
  return  this.counter <= 0
 }


public incriment(): void{
  this.updateAt= Date.now()
   this.counter++
}
public decriment(): void{
  this.updateAt= Date.now()
  this.counter--
}
public Zero():void{
  this.updateAt= Date.now()
  this.counter = 0
}

}
