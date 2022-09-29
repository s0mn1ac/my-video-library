/* Angular */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* RxJs */
import { Observable } from 'rxjs';

/* Interfaces */
import { IParams } from '../interfaces/params.interface';

@Injectable()
export class BaseService {

  constructor(protected httpClient: HttpClient) { }

  protected serviceGet(params: IParams): Observable<any> {
    return this.httpClient.get(params.url, this.getOptions(params));
  }

  protected servicePost(params: IParams): Observable<any> {
    return this.httpClient.post(params.url, params.body, this.getOptions(params));
  }

  protected servicePut(params: IParams): Observable<any> {
    return this.httpClient.put(params.url, params.body, this.getOptions(params));
  }

  protected serviceDelete(params: IParams): Observable<any> {
    return this.httpClient.delete(params.url, this.getOptions(params));
  }

  private getOptions(params: IParams): any {
    return {
      headers: params.headers,
      responseType: params.responseType,
      observe: 'response',
      withCredentials: false,
      params: params.params
    };
  }

}
