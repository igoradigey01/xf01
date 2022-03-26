import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css'],
})
export class PrivacyComponent implements OnInit {


  public  Operator: string = 'XF-01';

  public  Act: string =
    ' Федеральный закон от 30.12.2020 № 519-ФЗ <<О внесении изменений в Федеральный закон <<О персональных данных>>   >>';

  public  Web_Site: string = 'XF-01.ru';

  public  Email: string = 'admin@xf-01.ru';

  public  Link_Policy: string =
    this.Web_Site + '/content-lazy/privacy';

  constructor() {}

  ngOnInit(): void {

  }
}
