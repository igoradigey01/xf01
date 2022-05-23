import { Component, OnInit } from '@angular/core';
import { Nomenclature } from 'src/app/_shared/_interfaces/nomenclature.model';
import { EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NomenclatureService} from './../../shared/services/nomenclature.servise'

@Component({
  selector: 'app-opt-nomenclature-item',
  templateUrl: './opt-nomenclature-item.component.html',
  styleUrls: ['./opt-nomenclature-item.component.scss']
})
export class OptNomenclatureItemComponent implements OnInit {

  @Output() public _onChangeBack = new EventEmitter()
  @Input() public _nomenclature:Nomenclature|undefined;
  private _isComponentChild=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {

    const katalogId: string | null = this.route.snapshot.paramMap.get('id');
    const id: number = Number(katalogId) || 0;
  }

  public onBack(){
    this._onChangeBack.next();
  }

}
