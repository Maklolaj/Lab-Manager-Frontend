import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendNotification() {
    this.notifyParent.emit();
  }
}
