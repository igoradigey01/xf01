import { Component, OnInit, Input } from '@angular/core';

import { CategoriaN} from 'src/app/_shared/_interfaces/categoria-n.model';
import { CategoriaNService} from './../shared/services/categoria-n.servise';
import { Meta, Title } from '@angular/platform-browser';
import {SharedVarService} from 'src/app/_shared/services/shared-var.service';
import {SEO_var} from 'src/app/_shared/_interfaces/SEO-var.models'

@Component({
  selector: 'app-categoria-n',
  templateUrl: './categoria-n.component.html',
  styleUrls: ['./categoria-n.component.scss']
})
export class CategoriaNComponent implements OnInit {

  @Input() flagStyle: boolean = false;

  _categoriaNs: CategoriaN[] | null = null;

  //-------------------
  constructor(
    private repository:  CategoriaNService,
    private meta: Meta,
    private titleMeta: Title,
    private sharedVar:SharedVarService

    ) {



    }

  ngOnInit(): void {
    this.titleMeta.setTitle('X-01  Ханская мебель| цены в интернет-магазине | Доставка  производство   ');
    this.meta.addTag({name: "description", content: "Возможно Производство мебели на заказ по индивидуальным размерам .X-01  интернет-магазин недорогой мебели  . Оперативная  аккуратная доставка и сборка товара."})
    this.meta.addTag({name: "keywords", content: "ханская производство мебель корпусная заказ комплектующие форнитура цена  "})



    this.repository.CategoriaNs().subscribe(
      (data) => {
        this._categoriaNs = data;
        console.log(this._categoriaNs);
      },
      (err) => console.log('load katalog err: --' + err)
    );
  }

  public onSharedVarSet(item:CategoriaN){
  let i=<SEO_var>{id:item.id,decriptSEO:item.decriptSEO}

    this.sharedVar.SEO_let=i;


  }
}
//------------------------------

