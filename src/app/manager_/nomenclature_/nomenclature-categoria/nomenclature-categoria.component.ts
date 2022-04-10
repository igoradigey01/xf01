import { Component, OnInit } from '@angular/core';
import { StateView } from 'src/app/_shared/_interfaces/state-view';
import { Input, Output, EventEmitter } from '@angular/core';
//import { CategoriaNService } from '../../shared/services/categoria-n.service';
import { CategoriaN } from 'src/app/_shared/_interfaces/categoria-n.model';
import { DtoCategoriaN } from '../../categoria-n_/categoria-n-item/categoria-n-item.component';

@Component({
  selector: 'app-nomenclature-categoria',
  templateUrl: './nomenclature-categoria.component.html',
  styleUrls: ['./nomenclature-categoria.component.scss'],
})
export class NomenclatureCategoriaComponent implements OnInit {
  @Output() public _onCategoriaNChange = new EventEmitter<DtoCategoriaN>();
  @Input() public _categoriaNs: CategoriaN[] | undefined; // массив items katalog
  @Input() public _flagViewState: StateView = StateView.default;
  public _modul_name: string = '(менеджер)';
  public _router_link: string = '/manager';

  public _select_categoriaN: CategoriaN = <CategoriaN>{ id: -1, name: '' };

  constructor() {}

  ngOnInit(): void {
  //  this.loadCategorias(); -- load in MainComponent
  }

  //----------------------

  changeCategoriaN(item: CategoriaN) {
    // debugger
    this._select_categoriaN = item;

    this._flagViewState = StateView.init;
    this._onCategoriaNChange.emit(<DtoCategoriaN>{
      categoriaN: this._select_categoriaN,
      flagViewState: this._flagViewState,
    });
  }
  //--------------------

  public onChangedDefaultState() {
    //debugger
    this._flagViewState = StateView.default;
  }


}
