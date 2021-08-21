import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  company_name:string='FX-01'; //First Site

  constructor() { }

  ngOnInit(): void {
  }

}
