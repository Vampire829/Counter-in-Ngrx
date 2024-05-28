import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decriment, increment, changeupdatedAt, zero } from "./reducers/counter";
import { map } from "rxjs";
@Injectable()
export class AppEfects{
    constructor(private actions$: Actions){}

    updatedAt$ = createEffect(()=>this.actions$.pipe(
        ofType(increment, decriment, zero),
        map(()=>changeupdatedAt({updatedAt: Date.now()}))
    ))
}