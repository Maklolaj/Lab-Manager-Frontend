import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { siginIn } from 'src/app/store/reducers/auth.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private router: Router,
    private authService: AuthService
  ) {}
  userEmail = new FormControl('');
  userPass = new FormControl('');

  ngOnInit(): void {}

  signIn(): void {
    this.store.dispatch(siginIn({ isAdmin: false }));

    this.authService
      .signIn(this.userEmail.value, this.userPass.value)
      .subscribe(
        (jwt) => {
          localStorage.setItem('jwt', JSON.stringify(jwt));

          let decodedJWT = atob(
            JSON.parse(localStorage.getItem('jwt')!)['token'].split('.')[1]
          );

          this.store.dispatch(
            siginIn({ isAdmin: JSON.parse(decodedJWT)['prn'] === '606' })
          );
          console.log(jwt);
          console.log(decodedJWT);
          this.router.navigate(['app-main-panel']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  register(): void {
    this.router.navigate(['register']);
  }
}
