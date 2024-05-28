import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterRedicer, CounterState, KOYTER_KEY } from './counter';

export interface State {
 [KOYTER_KEY]: CounterState
}

export const reducers: ActionReducerMap<State> = {
   [KOYTER_KEY]: counterRedicer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
