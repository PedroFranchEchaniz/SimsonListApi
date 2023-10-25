import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Simpson } from '../models/simpson-list-interface';

@Injectable({
  providedIn: 'root'
})
export class SimpsonService {

  constructor(private http: HttpClient) { }

  getSimpsonList(): Observable<Simpson> {
    return this.http.get<Simpson>('https://apisimpsons.fly.dev/api/personajes')
  }
}
