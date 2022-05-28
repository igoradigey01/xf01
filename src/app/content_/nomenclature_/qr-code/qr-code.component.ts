import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { jsPDF } from "jspdf";
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

  @Input() public _nomenclatureURL: string | undefined;
  @Input()   public _katalogURL:string |undefined;

  public _clientHostURL:string;

   public get NomenclatureURL():string|undefined{
     if(this._nomenclatureURL)
      return `${this._clientHostURL}${this._nomenclatureURL}`
      else return undefined;
   }


   public get KatalogURL():string|undefined{
      if(this._katalogURL)
       return `${this._clientHostURL}${this._katalogURL}`
       else return undefined;
   }

  constructor() {
    this._clientHostURL = environment.clientRoot;
  }

  ngOnInit(): void {
  }


   public printQrKtalog():void{
    const toPrint = document.getElementsByTagName('canvas')[0];


    let imageData=this.getBase64Canvas(toPrint);

    console.log(imageData);
    let doc = new jsPDF();
    doc.addImage(imageData, 'JPEG', 0, 0, 20, 20);
    doc.addImage(imageData, 'JPEG', 20, 0, 20, 20);
    doc.addImage(imageData, 'JPEG', 40, 0, 20, 20);
    doc.addImage(imageData, 'JPEG', 60, 0, 20, 20);
    doc.addImage(imageData, 'JPEG', 80, 0, 20, 20);
   /*  if(imageData)
    doc.addImage(imageData); */
    doc.save('tatle');

    //const WindowPrt = window.open('', '', 'left=50,top=50,width=800,height=800,toolbar=0,scrollbars=0,status=0');
   /*  const WindowPrt= window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    if(toPrint&&WindowPrt){
    WindowPrt.document.write(imageData);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
    } */
   }

   getBase64Image(img:any) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    if(ctx)
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

    getBase64Canvas(canvas:any){
      var dataURL = canvas.toDataURL("image/png");
      return dataURL;

    }

  download() {
    /* const qrcode = document.getElementById('qrcode');
    let doc = new jsPDF();

    let imageData= this.getBase64Image(qrcode.firstChild.firstChild);
    doc.addImage(imageData, "JPG", 10, 10);

    doc.save('FirstPdf.pdf'); */
  }


}
