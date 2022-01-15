import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructorStandings } from '../models/constructor-standing.model';
import { DriverStandings } from '../models/driver-standing.model';
import { Entity } from '../models/entity.model';
import { RequestOptions } from '../models/request-options.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private apiService: ApiService) { }

  /*
  ** Drivers
  */
  getDriverStandingsByRace(requestOptions: RequestOptions): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('[year]/[round]/driverStandings', requestOptions);
  }
  
  getDriverStandingsByYear(requestOptions: RequestOptions): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('[year]/driverStandings', requestOptions);
  }
  
  getCurrentDriverStandings(requestOptions: RequestOptions): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('current/driverStandings', requestOptions);
  }
  
  getDriversChampionshipWinners(): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('driverStandings/1');
  }
  
  getDriverStandings(requestOptions: RequestOptions): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('[driverId]/driverStandings', requestOptions);
  }
  
  /*
  ** Constructors
  */
  getConstructorStandingsByRace(requestOptions: RequestOptions): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('[year]/[round]/constructorStandings', requestOptions);
  }
  
  getConstructorStandingsByYear(requestOptions: RequestOptions): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('[year]/constructorStandings', requestOptions);
  }
  
  getCurrentConstructorStandings(requestOptions: RequestOptions): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('current/constructorStandings', requestOptions);
  } 
  
  getConstructorChampionshipWinners(): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('constructorStandings/1');
  }

  getConstructorStandings(requestOptions: RequestOptions): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('[constructorId]/constructorStandings', requestOptions);
  }

}
