import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpParams } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { ManagerServiceModule } from './maneger-service.module';
import {TokenService} from 'src/app/_shared/services/token.service';
import { RouteApiService } from 'src/app/_shared/services/route-api.service';
import { Nomenclature } from 'src/app/_shared/_interfaces/nomenclature.model';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: ManagerServiceModule
})
export class NomenclatureService {

  constructor(
    private _http: HttpClient,
    private _token:TokenService,
    private _url: RouteApiService

  ){}

    /**Postavchik + Katalog get Nomenclature*/
  public NomenclaturePKs = (idKatlaog:number): Observable<Nomenclature[]> => {
    this._url.Controller = 'Nomenclature';
    this._url.Action = 'NomenclaturePKs';
    this._url.ID=idKatlaog;


    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      //  Authorization: 'Bearer ' + token,
    });
    let params:HttpParams=new HttpParams().set('postavchikId',this._url.PostavchikId)

    const httpOptions={headers,params}
    return this._http.get<Nomenclature[]>(this._url.Url, httpOptions) .pipe(
      map((data: any) => {
        //  console.log(JSON.stringify(data))
        return data.map((f: any) => {
          return <Nomenclature>{
            id:f.id,
            articleId:f. articleId,
            brandId:f.brandId,
            colorId:f.colorId,
            description:f.description,
            guid:f.guid,
            hidden:f.hidden,
            inStock:f.inStock,
            sale:f.sale,
            katalogId:f.katalogId,
            markup:f.markup,
            postavchikId:f.postavchikId,
            name:f.name,
            position:f.position,
            price:f.price,

            wwwroot: this._url.WWWroot,
          };
        });
      })
    );
  };


}
