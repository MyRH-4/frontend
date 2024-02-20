import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api';
import { Quiz } from '../core/model/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getJavaQuiz(): Observable<Quiz> {
    return this.http.get<Quiz>(API_URL + '/quiz/c3575c0a-2d66-46cc-9e8a-25f346e0ea00');
  }
}
