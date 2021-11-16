import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { siginIn } from 'src/app/store/simpleReducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor( private store:Store<any>) {}

  ngOnInit(): void {}



  signIn(){
    this.store.dispatch(siginIn())
  }
}
