import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { RESET } from '../contador.actions';
import { selectFeatureCount } from '../contador.selects';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador!: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectFeatureCount)
      .subscribe( state => {
        this.contador = state;
      });
  }

  reset() {
    const action = RESET();
    this.store.dispatch(action);
  }

}
