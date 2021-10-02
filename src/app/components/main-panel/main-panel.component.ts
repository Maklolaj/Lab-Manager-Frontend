import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {

  constructor() { }
  events: string[] = [];
  opened = false;
  ngOnInit(): void {
  }
  isOpenSideNav = false;

  toggleSideNav(){
    this.isOpenSideNav = !this.isOpenSideNav
  }

}
