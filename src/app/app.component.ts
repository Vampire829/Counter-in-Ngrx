import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterSelector, decriment, increment, updateAtSelector, zero} from './reducers/counter';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$=this.store.select(counterSelector)

  constructor(private store: Store){}

  public connotDesablet$=this.count$.pipe(map(n=> n<=0))
   public updatedAt$ = this.store.select(updateAtSelector)

public increment(){
  this.store.dispatch(increment())

   
}
public decriment(): void{
  this.store.dispatch(decriment())

}
public zero():void{
  this.store.dispatch(zero())

}

}


