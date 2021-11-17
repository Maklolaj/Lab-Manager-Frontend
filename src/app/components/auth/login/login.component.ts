import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { siginIn } from 'src/app/store/simpleReducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor( private store:Store<any>,
              private router: Router,
             ) {}

  ngOnInit(): void {}



  signIn(){
    this.store.dispatch(siginIn())
    this.router.navigate(['app-main-panel'])
  }
}
