import { Component, OnInit ,  SimpleChanges } from '@angular/core';
import { Nomenclature } from 'src/app/_shared/_interfaces/nomenclature.model';
import { EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NomenclatureService } from './../../shared/services/nomenclature.servise'
import { SharedVarService } from 'src/app/_shared/services/shared-var.service';

@Component({
  selector: 'app-nomenclature-item',
  templateUrl: './nomenclature-item.component.html',
  styleUrls: ['./nomenclature-item.component.scss']
})
export class NomenclatureItemComponent implements OnInit {


  @Output() public _onChangeBack = new EventEmitter()
  @Input() public _nomenclature: Nomenclature | undefined;
  @Input()   public _isChildComponent:boolean=false;



  //private _isComponentChild = true;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repository: NomenclatureService,
    private sharedVar: SharedVarService,
  ) { }

  ngOnInit(): void {

 // this is for http.get(http://localhost:4200/content/categoria/katalog/nomenclature/:id)
 if(!this._isChildComponent){
    const katalogId: string | null = this.route.snapshot.paramMap.get('id');
      // resolver run //(QR-code)
      this.route.data.subscribe();

    if (katalogId) {
      const id: number = Number(katalogId) || 0;
      this.load(id);
    }
    console.log("ngOnInit nomenclatureItem _isChildComponent --false");
  }else{
    if(this._nomenclature){
      this._nomenclature.articleName=this.sharedVar.ArticleNs.length>0?this.sharedVar.ArticleNs.find(d=>d.id===this._nomenclature!.articleId)?.name:undefined;
      this._nomenclature.brandName=this.sharedVar.BrandNs.length>0?this.sharedVar.BrandNs.find(d=>d.id===this._nomenclature!.brandId)?.name:undefined;
      this._nomenclature.colorName=this.sharedVar.ColorNs.length>0?this.sharedVar.ColorNs.find(d=>d.id===this._nomenclature!.colorId)?.name:undefined;

       }

  }

   // console.log("NomemclatureItem -- clolrN.lenght"+this.sharedVar.ColorNs.length)

  }

  ngOnChanges(changes: SimpleChanges) {







  }

  public ImgObj(): string {
    // copy paste  from manager module
    if (this._nomenclature) {
      let root = this._nomenclature.wwwroot ? this._nomenclature.wwwroot : '';
      root = root + 'L' + this._nomenclature.guid + '.webp';

      return root;
    }
    else return '';
  }

  public onBack() {
    if (this._isChildComponent) {
      this._onChangeBack.next();
      return;
    }
    if (this._nomenclature) {
      this.router.navigateByUrl('/content/categoria/katalog/' + this._nomenclature.katalogId);
    }
  }


  private load(id: number) {
    this.repository.Nomenclature(id).subscribe(
      d => {
        this._nomenclature = d;


      },
      err=> {},
      ()=>{

        if(this._nomenclature){
          this._nomenclature.articleName=this.sharedVar.ArticleNs.length>0?this.sharedVar.ArticleNs.find(d=>d.id===this._nomenclature!.articleId)?.name:undefined;
          this._nomenclature.brandName=this.sharedVar.BrandNs.length>0?this.sharedVar.BrandNs.find(d=>d.id===this._nomenclature!.brandId)?.name:undefined;
          this._nomenclature.colorName=this.sharedVar.ColorNs.length>0?this.sharedVar.ColorNs.find(d=>d.id===this._nomenclature!.colorId)?.name:undefined;

           }

      }

    )

  }



}
