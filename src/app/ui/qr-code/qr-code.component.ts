import { Component, OnInit } from '@angular/core';
//Что такое QR-код--
// https://cryptos.tv/chto-takoe-qr-kod-quick-response-code-kak-sozdat-i-skanirovat-qr-kod-na-smartfone/
// lib
//https://www.npmjs.com/package/ng-qrcode
// sample
//https://mnahkies.github.io/ng-qrcode/
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
