import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  company_name_1:string='Fuks';
  company_name_2:string='Man'; //First Site

  //wathappMessages:string="https://wa.me/?text=Меня%20интересует%20объявление%20о%20квартире"

  constructor() { }

  ngOnInit(): void {
  }

}
