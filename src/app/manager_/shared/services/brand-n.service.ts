import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { ManagerServiceModule } from './maneger-service.module';
import {Brand} from 'src/app/_shared/_interfaces/brand.model';
import { Observable } from 'rxjs';
import {TokenService} from 'src/app/_shared/services/token.service';
import { RouteApiService } from 'src/app/_shared/services/route-api.service';

@Injectable({
  providedIn: ManagerServiceModule
})
export class BrandNService {


  constructor(
    private _http: HttpClient,
    private _token:TokenService,
    private _url: RouteApiService
    ) {

    }



  public BrandNs = (): Observable<Brand[]> => {
    this._url.Controller = 'Brand';
    this._url.Action = 'get';

    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
       Authorization: 'Bearer ' + this._token.AccessToken,
    });


    return this._http.get<Brand[]>(this._url.Url, { headers });
  };



  //------------------------------------------------

  public Create = (item: Brand): Observable<any> => {

    this._url.Controller = 'Brand';
    this._url.Action = 'Create';
    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer ' + this._token.AccessToken,
    });

    let fd = this.createFormData(item);

    new Response(fd).text().then(console.log);

    return this._http.post(this._url.Url, fd,{
      reportProgress: true,
      observe: 'events',
      headers,
    });
  }

  //-----------------------------------

  public Update = (item: Brand): Observable<any> => {
   // throw new Error("not implemint exeption");
   this._url.Controller = 'Brand';
   this._url.Action = 'Update';
 //  debugger
    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer ' + this._token.AccessToken,
    });
    let fd = this.createFormData(item);

    new Response(fd).text().then(console.log);
    return this._http.put(this._url.Url+'/'+item.id, fd,{
      reportProgress: true,
      observe: 'events',
      headers,
    });
  }
  //-------------------

  public Delete = (id: number): Observable<any> => {
    this._url.Controller = 'Brand';
    this._url.Action = 'delete';


    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer ' + this._token.AccessToken,
    });
    let url: string = this._url.Url+'/'+id;
    return this._http.delete(url,{
      reportProgress: true,
      observe: 'events',
      headers,
    });
  }


  private createFormData(item: Brand ): FormData {
    let formData = new FormData();

    const entries = Object.entries(item);

      // debugger
      entries.forEach(([key, value]) => {
         // if (key == 'products') return;

       /*  if (key == 'imageWebp') {
          let f = value as File;
          formData.append('file', f, f.name);
          return;
        } */

        formData.append(key, value);

      });




    return formData;
  }

}
