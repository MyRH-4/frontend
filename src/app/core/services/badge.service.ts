import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Badge } from '../model/badge';
import { API_URL } from '../../config/api';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  constructor(private http: HttpClient) {}

  getUserBadges(id: string): Observable<Badge[]> {
    return this.http.get<Badge[]>(`${API_URL}/badges/user/${id}`);
  }
}
