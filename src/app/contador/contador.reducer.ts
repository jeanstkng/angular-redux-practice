import { Action, createReducer, on } from '@ngrx/store';
import * as ContadorPageActions from '../contador/contador.actions';

export const initialState: number =  10;

const contadorReducer = createReducer(
    initialState,
    on(ContadorPageActions.INCREMENTAR, state => state + 1 ),
    on(ContadorPageActions.DECREMENTAR, state => state - 1 ),
    on(ContadorPageActions.MULTIPLICAR, (state, { payload }) => state * payload ),
    on(ContadorPageActions.DIVIDIR, (state, { payload }) => state / payload ),
    on(ContadorPageActions.RESET, state => initialState ),
  );

export function counterReducer(state: number | undefined, action: Action) {
    return contadorReducer(state, action);
}

