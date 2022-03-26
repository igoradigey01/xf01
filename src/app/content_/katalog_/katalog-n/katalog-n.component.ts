import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KatalogN} from 'src/app/_shared/_interfaces/katalog-n.model';
import { KatalogNService} from '../../shared/services/katalog-n.service';
import { Meta, Title } from '@angular/platform-browser';
import {SharedVarService} from 'src/app/_shared/services/shared-var.service';
import {SEO_var} from 'src/app/_shared/_interfaces/SEO-var.models'

@Component({
  selector: 'app-katalog-n',
  templateUrl: './katalog-n.component.html',
  styleUrls: ['./katalog-n.component.scss']
})
export class KatalogNComponent implements OnInit {



  _katalogNs: KatalogN[] | undefined ;
  _categoriaN_name:string ='';



  constructor(

    private repository:  KatalogNService,
    private route: ActivatedRoute,
    private meta: Meta,
    private titleMeta: Title,
    private sharedVar:SharedVarService
  ) { }

  ngOnInit(): void {

    const katalogId: string | null = this.route.snapshot.paramMap.get('id');
    const id: number = Number(katalogId) || 0;
    this.route.queryParams.subscribe((queryParam: any) => {
      this._categoriaN_name = queryParam['katalog'];
    });

    if (this.sharedVar.SEO_let) this.LoadSEO(this.sharedVar.SEO_let, id);

    this.Load(id);
    this.titleMeta.setTitle(this._categoriaN_name);
  }


  private Load(idCategoria: number): void {
    this.repository.Katalogs(idCategoria).subscribe(
      (d) => {
        this._katalogNs = d;
      },
      (err) => {
        console.log(err);
      }
    ); //13.03.21
  }

  private LoadSEO(item: SEO_var, idCategoria: number) {
    if (item.id || item.id == idCategoria)
      if (item.decriptSEO){
        this.meta.updateTag({ name: 'description', content: item.decriptSEO });
      }

  }

}
