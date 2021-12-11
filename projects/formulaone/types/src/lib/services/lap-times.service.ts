import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';
import { LapTimes } from '../models/lap-time.model';
import { RequestOptions } from '../models/request-options.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LapTimesService {

  constructor(private apiService: ApiService) { }

  getGetTimeByRaceLap(requestOptions: RequestOptions): Observable<Entity<LapTimes>> {
    return this.apiService.get<LapTimes>('[year]/[round]/laps/[lapnumber]', requestOptions);
  }

}
