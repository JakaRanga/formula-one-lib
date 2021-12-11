import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiEntity } from '../models/api-entity.model';
import { Entity } from '../models/entity.model';
import { RequestOptions } from '../models/request-options.model';
import { RequestOptionsResolver } from '../utlis/request-options.resolver';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, requestOptions: RequestOptions, params: HttpParams = undefined): Observable<Entity<T>> {
    url = RequestOptionsResolver.resolve(url, requestOptions);

    if (params == undefined)
      params = new HttpParams();

    const obs = from(this.http.get<ApiEntity<Entity<T>>>(`${environment.apiUrl}/${url}`, {
      params: params
    })).pipe(
      map((data: ApiEntity<Entity<T>>) =>
        data.MRData
      )
    );

    return obs;
  }
}
