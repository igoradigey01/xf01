import { Component, OnInit, Input } from '@angular/core';

import { CategoriaN} from 'src/app/_shared/_interfaces/categoria-n.model';
import { CategoriaNService} from '../../shared/services/categoria-n.servise';
import { Meta, Title } from '@angular/platform-browser';
import {SharedVarService} from 'src/app/_shared/services/shared-var.service';
import {SEO_var} from 'src/app/_shared/_interfaces/SEO-var.models'

@Component({
  selector: 'app-opt-categoria-n',
  templateUrl: './opt-categoria-n.component.html',
  styleUrls: ['./opt-categoria-n.component.scss']
})
export class OptCategoriaNComponent implements OnInit {



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
    this.titleMeta.setTitle('XF-01  Ханская Комплектующие Мебель | цены в интернет-магазине | Доставка     ');
    this.meta.addTag({name: "description", content: "мебельная фурнитура для кухни спальни прихожей .Наполнение для шкафов и гардеробных комнат .XF-01  интернет-магазин недорогой Номенклатуры для мебели  . Оперативная  аккуратная доставка ."})
    this.meta.addTag({name: "keywords", content: "ханская  мебель корпусная заказ комплектующие форнитура цена  "})



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


