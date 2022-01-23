import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  email: string = 'test@test.pl';

  passwordOne: string = '';

  passwordTwo: string = '';

  changeUserData() {
    alert(`Dane zostały zmienione`);
  }
}
