import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isUserLogged = false
  constructor(private router: Router){
  }

  navigateToMainPanel(){
    this.isUserLogged = true
    this.router.navigate(['app-main-panel']);
  }

}
