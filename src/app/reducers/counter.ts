import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const KOYTER_KEY = 'counter'

export const increment = createAction('[COUNTER] increment')
export const decriment = createAction('[COUNTER] decriment')
export const zero = createAction('[COUNTER] zero')
export const changeupdatedAt = createAction('[COUNTER] checngeApdatedAt', props<{updatedAt: number}>())

export interface CounterState{
    count: number
    updatedAt?: number
}
export const initialState: CounterState={
    count: 0
}

export const counterRedicer = createReducer(
    initialState,
    on(increment, state =>({
     ...state, 
     count: state.count+1
    })),
    on(decriment, state =>({
        ...state,
        count: state.count-1
    })),
    on(zero, state =>({
        ...state,
        count: 0
    })),
    on(changeupdatedAt, (state, action)=>({
        ...state,
        updatedAt: action.updatedAt
    }))

)

export const featerSelector = 
createFeatureSelector<CounterState>(KOYTER_KEY)

export const counterSelector = createSelector(
    featerSelector,
    state=>state.count
)

export const updateAtSelector = createSelector(
    featerSelector,
    state=>state.updatedAt

)