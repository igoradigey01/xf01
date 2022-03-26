import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { ManagerServiceModule } from './maneger-service.module';
import { KatalogN } from 'src/app/_shared/_interfaces/katalog-n.model';
import {CategoriaN} from 'src/app/_shared/_interfaces/categoria-n.model'
import { Observable } from 'rxjs';
import {TokenService} from 'src/app/_shared/services/token.service';
import { RouteApiService } from 'src/app/_shared/services/route-api.service';

@Injectable({
  providedIn: ManagerServiceModule
})
export class KatalogNService {

  constructor(
    private _http: HttpClient,
    private _token:TokenService,
    private _url: RouteApiService
    ) { }


    public Katalogs = (categoriaId:number): Observable<KatalogN[]> => {
      this._url.Controller = 'KatalogN';
      this._url.Action = 'Items'+'/'+categoriaId;


      let headers: HttpHeaders = new HttpHeaders({
        Accept: 'application/json',
         Authorization: 'Bearer ' + this._token.AccessToken,
      });


      return this._http.get<KatalogN[]>(this._url.Url, { headers });
    };







}
