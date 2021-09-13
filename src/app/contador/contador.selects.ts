import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducers";

export const selectContador = (state: AppState) => state.contador;
 
export const selectFeatureCount = createSelector(
  selectContador,
  (contador: number) => contador
);