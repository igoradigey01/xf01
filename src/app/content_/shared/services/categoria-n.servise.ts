import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriaN} from '../../../_shared/_interfaces/categoria-n.model';
import { RouteApiService } from 'src/app/_shared/services/route-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaNService {
  constructor(
    private _http: HttpClient,
    private url: RouteApiService
  ) {
   // url.Controller = 'Katalog';
   // console.log("test -- Katalog Servises - init ok")
  }

  public CategoriaNs = (): Observable<CategoriaN[]> => {
    this.url.Controller = 'CategoriaN';
    this.url.Action = 'get';
    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      //  Authorization: 'Bearer ' + token,
    });

    return this._http.get<CategoriaN[]>(this.url.Url, { headers });
  };
}
