import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      login: ['', [Validators.required, Validators.minLength(6)]],
      passwordOne: ['', [Validators.required, Validators.minLength(6)]],
      passwordTwo: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    if (this.validateForm()) {
      alert('registered successfully');
      this.authService
        .registerUser(this.f.email.value, this.f.passwordOne.value)
        .subscribe((response) => {
          console.log(response);
        });
      this.router.navigate(['login']);
    }
  }

  validateForm(): boolean {
    if (!this.f.email.valid) {
      alert('Nieprawidłowy E-mail');
      return false;
    }
    if (!this.f.passwordOne.valid || !this.f.passwordTwo.valid) {
      alert('Hasła muszą mieć minimum 6 znaków');
      return false;
    }
    if (this.f.passwordOne.value !== this.f.passwordTwo.value) {
      alert('Hasła muszą być identyczne');
      return false;
    }
    if (!this.registerForm.valid) {
      alert('Nieprawidłowe dane w formularzu!');
      return false;
    }
    return true;
  }

  handleSuccessfulRegistration(): void {}
}
