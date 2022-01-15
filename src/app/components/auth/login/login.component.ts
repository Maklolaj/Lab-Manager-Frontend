import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { siginIn } from 'src/app/store/reducers/auth.reducers';
import { JWTHelper } from 'src/app/utils/jwt-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private jwtHelper: JWTHelper
  ) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    if (this.jwtHelper.getExpDate()) {
      const tokenExpDate = new Date(+this.jwtHelper.getExpDate() * 1000);
      this.tryToLoginAutomatically(tokenExpDate);
    }

    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get loginControls() {
    return this.loginForm.controls;
  }

  signIn(): void {
    this.store.dispatch(siginIn({ isAdmin: false }));
    this.authService
      .signIn(this.loginControls.email.value, this.loginControls.password.value)
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
          this.loginControls.email.setValue('');
          this.loginControls.password.setValue('');
          alert('Logowanie nieudane');
        }
      );
  }

  register(): void {
    this.router.navigate(['register']);
  }

  tryToLoginAutomatically(tokenExpDate: Date): void {
    if (tokenExpDate >= new Date()) {
      this.router.navigate(['app-main-panel']);
      let decodedJWT = atob(
        JSON.parse(localStorage.getItem('jwt')!)['token'].split('.')[1]
      );

      this.store.dispatch(
        siginIn({ isAdmin: JSON.parse(decodedJWT)['prn'] === '606' })
      );
    }
  }
}
