import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  updateUserDataForm: FormGroup;

  ngOnInit(): void {
    this.updateUserDataForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      passwordOne: ['', [Validators.required, Validators.minLength(6)]],
      passwordTwo: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fromControls() {
    return this.updateUserDataForm.controls;
  }

  changeUserData() {
    this.authService
      .updateUserData({
        userEmail: this.fromControls.email.value,
        userPassword: this.fromControls.passwordOne.value,
        userReTypedPassword: this.fromControls.passwordTwo.value,
      })
      .subscribe(
        (x) => {
          console.log(x);
          this.clearOutForm();
          alert('Operacja udana');
        },
        (error) => {
          console.log(error);
          this.clearOutForm();
          alert('Operacja nieudana');
        }
      );
  }

  clearOutForm(): void {
    this.fromControls.email.setValue('');
    this.fromControls.passwordOne.setValue('');
    this.fromControls.passwordTwo.setValue('');
  }
}
