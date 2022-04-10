import { Component, OnInit } from '@angular/core';
import { Nomenclature } from 'src/app/_shared/_interfaces/nomenclature.model';
import { EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-nomenclature-table',
  templateUrl: './nomenclature-table.component.html',
  styleUrls: ['./nomenclature-table.component.scss']
})
export class NomenclatureTableComponent implements OnInit {

  @Input() public _nomenclatures: Nomenclature[] = [];
// @Input() public _root_url_img: string = '';
  @Output() public _onChangeRow=new EventEmitter<Nomenclature>()

  constructor() {}

  ngOnInit(): void {}

  public changeProduct(product: Nomenclature) {
  //  console.log(" changeProduct(product: Product-)"+product.name+"||imgName--"+ product.rootImgSrc+ "|"  +product.imgName);
    this._onChangeRow.emit(product);

  }
}
