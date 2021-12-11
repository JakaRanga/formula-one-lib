import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../models/entity.model';
import { Seasons } from '../models/season.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private apiService: ApiService) { }

  getSeasons(): Observable<Entity<Seasons>> {
    return this.apiService.get<Seasons>('seasons');
  }
}
