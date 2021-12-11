import { Injectable } from '@angular/core';
import { RequestOptions } from '../models/request-options.model';
import { SeasonSchedule } from '../models/schedule.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(private apiService: ApiService) { }

  getSeasonSchedule(options: RequestOptions) {
    return this.apiService.get<SeasonSchedule>('[year]', options);
  }

  getRaceSchedule(options: RequestOptions) {
    return this.apiService.get<SeasonSchedule>('[year]/[round]', options);
  }

}
