import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';
import { FinishStatus } from '../models/finish-status.model';
import { RequestOptions } from '../models/request-options.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FinishStatusService {

  constructor(private apiService: ApiService) { }

  getFinishStatus(): Observable<Entity<FinishStatus>> {
    return this.apiService.get<FinishStatus>('status');
  }

  getFinishStatusByYear(options: RequestOptions): Observable<Entity<FinishStatus>> {
    return this.apiService.get<FinishStatus>('[year]/status', options);
  }

  getFinishStatusByRace(options: RequestOptions): Observable<Entity<FinishStatus>> {
    return this.apiService.get<FinishStatus>('[year]/[round]/status', options);
  }
}
