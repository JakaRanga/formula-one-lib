import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constructors } from '../models/constructor.model';
import { Entity } from '../models/entity.model';
import { RequestOptions } from '../models/request-options.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {

  constructor(private apiService: ApiService) { }

  getConstructors(): Observable<Entity<Constructors>> {
    return this.apiService.get<Constructors>('constructors');
  }

  geConstructorsByYear(options: RequestOptions): Observable<Entity<Constructors>> {
    return this.apiService.get<Constructors>('[year]/constructors', options);
  }

  getConstructorsByRace(options: RequestOptions): Observable<Entity<Constructors>> {
    return this.apiService.get<Constructors>('[year]/[round]/constructors', options);
  }

  getConstructorsById(options: RequestOptions): Observable<Entity<Constructors>> {
    return this.apiService.get<Constructors>('constructors/[constructorId]', options);
  }
}
