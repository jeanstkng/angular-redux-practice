import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { DECREMENTAR, INCREMENTAR } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => this.contador = state);
  }

  increment() {
    const action = INCREMENTAR();
    this.store.dispatch(action);
  }

  decrement() {
    const action = DECREMENTAR();
    this.store.dispatch(action);
  }

}
