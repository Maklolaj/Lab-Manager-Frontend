import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { siginIn } from 'src/app/store/simpleReducer';

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
  tempEmail: string = 'test@test.pl';
  tempPass: string = 'Test1234!';

  ngOnInit(): void {}

  signIn() {
    this.store.dispatch(siginIn());
    this.authService.signIn(this.tempEmail, this.tempPass).subscribe((jwt) => {
      localStorage.setItem('jwt', JSON.stringify(jwt));
    });
    this.router.navigate(['app-main-panel']);
  }
}
