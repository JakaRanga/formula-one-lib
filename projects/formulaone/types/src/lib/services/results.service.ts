import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';
import { RequestOptions } from '../models/request-options.model';
import { RaceResult } from '../models/race-result.model';
import { ApiService } from './api.service';
import { QualiResult } from '../models/quali-result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private apiService: ApiService) { }

  getRaceResultsByRace(options: RequestOptions): Observable<Entity<RaceResult>> {
    return this.apiService.get<RaceResult>('[year]/[round]/results', options);
  }

  getRaceResultsFromLatestRace(options: RequestOptions): Observable<Entity<RaceResult>> {
    return this.apiService.get<RaceResult>('current/last/results', options);
  }

  getQualiResultsByRace(options: RequestOptions): Observable<Entity<QualiResult>> {
    return this.apiService.get<QualiResult>('[year]/[round]/qualifying', options);
  }

}
