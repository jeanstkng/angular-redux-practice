import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DIVIDIR, MULTIPLICAR } from '../contador.actions';
import { selectFeatureCount } from '../contador.selects';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador!: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectFeatureCount)
      .subscribe( state => {
        this.contador = state;
      });
  }

  multiplicar() {
    const action = MULTIPLICAR({payload: 5});
    this.store.dispatch(action);
  }

  dividir() {
    const action = DIVIDIR({payload: 5});
    this.store.dispatch(action);
  }

}
