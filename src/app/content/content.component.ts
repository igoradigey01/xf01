import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  teg_meta:string="Функциональная фурнитура;лицевая фурнитура;Кухонные мойки;Встраиваемая техника;Столешницы;Кромка пвх;"

  constructor() { }

  ngOnInit(): void {
  }

}
