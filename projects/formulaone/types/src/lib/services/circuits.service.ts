import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circuits } from '../models/circuit.model';
import { Entity } from '../models/entity.model';
import { RequestOptions } from '../models/request-options.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {

  constructor(private apiService: ApiService) { }

  getCircuits(): Observable<Entity<Circuits>> {
    return this.apiService.get<Circuits>('circuits');
  }

  getCircuitsByYear(options: RequestOptions): Observable<Entity<Circuits>> {
    return this.apiService.get<Circuits>('[year]/circuits', options);
  }

  getCircuitsByRace(options: RequestOptions): Observable<Entity<Circuits>> {
    return this.apiService.get<Circuits>('[year]/[round]/circuits', options);
  }

  getCircuitsById(options: RequestOptions): Observable<Entity<Circuits>> {
    return this.apiService.get<Circuits>('circuits/[circuitId]', options);
  }
}
