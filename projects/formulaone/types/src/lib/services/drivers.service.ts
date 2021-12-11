import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drivers } from '../models/driver.model';
import { Entity } from '../models/entity.model';
import { RequestOptions } from '../models/request-options.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private apiService: ApiService) { }

  getDrivers(options: RequestOptions): Observable<Entity<Drivers>> {
    return this.apiService.get<Drivers>('drivers', options);
  }

  getDriversByYear(options: RequestOptions): Observable<Entity<Drivers>> {
    return this.apiService.get<Drivers>('[year]/drivers', options);
  }

  getDriversByRace(options: RequestOptions): Observable<Entity<Drivers>> {
    return this.apiService.get<Drivers>('[year]/[round]/drivers', options);
  }

  getDriversById(options: RequestOptions): Observable<Entity<Drivers>> {
    return this.apiService.get<Drivers>('drivers/[driverId]', options);
  }
}
