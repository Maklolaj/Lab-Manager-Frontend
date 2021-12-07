import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  phoneNumber: number = 876125984;

  email: string = 'test@test.pl';

  userName: string = 'User456';

  changeUserData() {
    alert(`Dane zostały zmienione`);
  }
}
