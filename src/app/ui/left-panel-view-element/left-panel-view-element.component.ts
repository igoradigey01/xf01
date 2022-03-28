import { Component, OnInit } from '@angular/core';
// import {ProductViewComponent} from './../product-view/product-view.component'
import { StateView } from 'src/app/_shared/_interfaces/state-view';
import { KatalogUI } from './../shared/_interfaces/katalog.model';
//import {} from ''

import { EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

//import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-left-panel-view-element',
  templateUrl: './left-panel-view-element.component.html',
  styleUrls: ['./left-panel-view-element.component.scss'],
})
export class LeftPanelViewElementComponent implements OnInit {
  // @ViewChild('sidenav') _sidenav: MatSidenav|undefined;
  @Input() public _modul_name: string = '';
  @Input() public _router_link: string = '';
  @Input()  public _flagViewState: StateView = StateView.default;
  @Output() _onChangedViewMode = new EventEmitter<StateView>();
  @Output() _onChangedKatalogUI = new EventEmitter<KatalogUI>();
  public _selectedKagalogUI: KatalogUI = <KatalogUI>{ id: -1, name: '' };
  @Input() public _katalogs: KatalogUI[] | null = null;
  public _flagStyle: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  public onChangedView(event: StateView) {
    this._flagViewState = event;
    this._onChangedViewMode.emit(event);
  }

  public onChecks(item: KatalogUI) {
    this._flagStyle = true;
    this._selectedKagalogUI = item;
    this._onChangedKatalogUI.emit(item)
    // if(this._sidenav) this._sidenav.close();
  }
}
