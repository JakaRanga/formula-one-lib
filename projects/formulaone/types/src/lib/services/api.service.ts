import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiEntity } from '../models/api-entity.model';
import { Entity } from '../models/entity.model';
import { Environment } from '../models/environment.model';
import { RequestOptions } from '../models/request-options.model';
import { RequestOptionsResolver } from '../utlis/request-options.resolver';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, @Inject('env') private env: Environment) { }

  get<T>(url: string, requestOptions: RequestOptions, params?: HttpParams): Observable<Entity<T>> {
    url = RequestOptionsResolver.resolve(url, requestOptions);

    if (params == undefined)
      params = new HttpParams();

    const obs = from(this.http.get<ApiEntity<Entity<T>>>(`${this.env.apiUrl}/${url}`, {
      params: params
    })).pipe(
      map((data: ApiEntity<Entity<T>>) =>
        data.MRData
      )
    );

    return obs;
  }
}
