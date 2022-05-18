import { Component, OnInit } from '@angular/core';
import { Nomenclature } from 'src/app/_shared/_interfaces/nomenclature.model';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nomenclature-item',
  templateUrl: './nomenclature-item.component.html',
  styleUrls: ['./nomenclature-item.component.scss']
})
export class NomenclatureItemComponent implements OnInit {


  @Output() public _onChangeBack = new EventEmitter()
  @Input() public _nomenclature:Nomenclature|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public onBack(){
    this._onChangeBack.next();
  }

}
