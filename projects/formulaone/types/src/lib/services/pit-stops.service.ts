import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';
import { PitStops } from '../models/pit-stop.model';
import { RequestOptions } from '../models/request-options.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PitStopsService {

  constructor(private apiService: ApiService) { }

  getPitStopsByRace(options: RequestOptions): Observable<Entity<PitStops>> {
    return this.apiService.get<PitStops>('[year]/[round]/pitstops', options);
  }

  getPitStopByRace(options: RequestOptions): Observable<Entity<PitStops>> {
    return this.apiService.get<PitStops>('[year]/[round]/pitstops/[pitstopnumber]', options);
  }

}
