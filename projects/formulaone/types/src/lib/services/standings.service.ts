import { Injectable } from '@angular/core';
import { Entity } from '@formulaone/types';
import { Observable } from 'rxjs';
import { ConstructorStandings } from '../models/constructor-standing.model';
import { DriverStandings } from '../models/driver-standing.model';
import { RequestOptionsResolver } from '../utlis/request-options.resolver';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private apiService: ApiService) { }

  /*
  ** Drivers
  */
  getDriverStandingsByRace(requestOptions: RequestOptionsResolver): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('[year]/[round]/driverStandings', requestOptions);
  }
  
  getDriverStandingsByYear(requestOptions: RequestOptionsResolver): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('[year]/driverStandings', requestOptions);
  }
  
  getCurrentDriverStandings(requestOptions: RequestOptionsResolver): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('current/driverStandings', requestOptions);
  }
  
  getDriversChampionshipWinners(): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('driverStandings/1');
  }
  
  getDriverStandings(requestOptions: RequestOptionsResolver): Observable<Entity<DriverStandings>> {
    return this.apiService.get<DriverStandings>('[driverId]/driverStandings', requestOptions);
  }
  
  /*
  ** Constructors
  */
  getConstructorStandingsByRace(requestOptions: RequestOptionsResolver): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('[year]/[round]/constructorStandings', requestOptions);
  }
  
  getConstructorStandingsByYear(requestOptions: RequestOptionsResolver): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('[year]/constructorStandings', requestOptions);
  }
  
  getCurrentConstructorStandings(requestOptions: RequestOptionsResolver): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('current/constructorStandings', requestOptions);
  }
  
  getConstructorChampionshipWinners(): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('constructorStandings/1');
  }

  getConstructorStandings(requestOptions: RequestOptionsResolver): Observable<Entity<ConstructorStandings>> {
    return this.apiService.get<ConstructorStandings>('[constructorId]/constructorStandings', requestOptions);
  }

}
