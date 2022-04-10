import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ManagerServiceModule } from '../../../manager_/shared/services/maneger-service.module';
import { VersionInfo} from 'src/app/ui/shared/_interfaces/vertion-info.model';
import { TokenService } from 'src/app/_shared/services/token.service';
import { RouteApiService } from 'src/app/_shared/services/route-api.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: ManagerServiceModule })
export class VersionInfoService {
  constructor(
    private http: HttpClient,
    private url: RouteApiService
  ) {
    // url.Controller='Version';-
  }
  //----------------------------

 public  get ServerVersion(): Observable<VersionInfo> {

    this.url.Controller = 'Version';
    this.url.Action='info'
    this.url.ID=null;
    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      //  Authorization: 'Bearer ' + token,
    });

    //  console.log('Info-servise-getVertion()---------');
    return this.http.get<VersionInfo>(this.url.Url, { headers });

    /* pipe(
      map((obj: any) => {
        //  let obj = data['VertionInfo'];
        return obj.map(function (obj: any): VersionInfo {
          return <VersionInfo>{ version: obj.v, description: obj.description };
        });
      })
    ); */
  }

  public get CleintVersion():VersionInfo{

    return  <VersionInfo> {version:environment.version,description:environment.description};

  }

 public  get RootImg(): string {
    // return this.http.get(src,{responseType: 'blob'});

    return this.url.RootImage;
  }
}
