import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly access_token: string = 'access_token'; //name in localStorage
  private readonly refresh_token: string = 'refresh_token'; //name in localStorage

  private _invalidTimeAccess_token$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);


  constructor() {}

  public get InvalidTimeAccess_token$(): BehaviorSubject<boolean> {
    return this._invalidTimeAccess_token$;
  }
  /** set value for  _invalidLogin ; defauld -- true */
  private setInvalidTimeAccess_token$(i: boolean) {
    this._invalidTimeAccess_token$.next(i);
  }

  /** Get access_token */
  public get AccessToken(): string | null {
    let token = localStorage.getItem(this.access_token);

    return token;
  }

  /** Set access_token */
  public set AccessToken(access_token: string | null) {
    //debugger
    if (access_token){
      localStorage.setItem(this.access_token, access_token);
      this.setInvalidTimeAccess_token$(false);
      if(this.getExpiryTime()){
      setTimeout (() => {
     this.setInvalidTimeAccess_token$(true)
        console.log("TokenService --setInvalidAccess_token$ -- true -- from setTimeout");
     },this.getTokenDeltaTime());
    }

    }
  }

  /**  access_token существует в репозитории? */
  public get Exists(): boolean {
    let token = localStorage.getItem(this.access_token);
  // debugger
    if (token&&this.isTokenExpired()) {
      return true;
    }
    return false;
  }

  /**Clear access_token */
  Clear(): void {
    localStorage.removeItem(this.access_token);
  }

/** дата когда   протухнет |*/
 private getExpiryTime() {
   let token=  this.decodeToken()

   return token ? ( token.exp): null;

  }

  /** сколько секунд живет */
  private getTokenDeltaTime():number{
   //debugger
    let time =(new Date()).getTime();
   //let t=date.getMilliseconds()
    if(this.getExpiryTime()){
      let exp=this.getExpiryTime() *1000;
    console.log("--this.getExpiryTime()--"+time);
    let delta=exp - time;
    console.log("TokenService-- getTokenDeltaTime()--"+delta);
    return delta;
    }
    return 1;

  }

 /** срок действия токена истек ?*/
 private isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      let time=  (new Date()).getTime();
      let exp=(1000 * expiryTime) ;
      if (time >= exp ) {
        return false;
      }
      return true;
    }
    else {
      return false;
    }
  }

  private  decodeToken():any{

    let dataJwt = this.AccessToken?.split('.')[1];
    if (!dataJwt) {
      return null;
    }
    let decodeData = atob(dataJwt);
    let data = JSON.parse(decodeData);
    //console.log('decodeData--' + decodeData);
   // console.log('data--' + data.role);
    return data;

  }

  public get Role():string|null {
     let token=  this.decodeToken()

   return token ? token.role : null;

  }

  /** Set refresh_token не используется */
  public set RefreshToken(refresh_token: string | null) {
    if (refresh_token) localStorage.setItem(this.refresh_token, refresh_token);
  }

  /** Get refresh_token */
  public get RefreshToken(): string | null {
    let token = localStorage.getItem(this.access_token);

    return token;
  }

  /**  refresh_token существует в репозитории?*/
  public ExistsRefreshToken(): boolean {
    if (this.RefreshToken) {
      return true;
    }
    return false;
  }
  /** Clear refresh_token */
  public ClearRefreshToken(): void {
    localStorage.removeItem(this.refresh_token);
  }

}
