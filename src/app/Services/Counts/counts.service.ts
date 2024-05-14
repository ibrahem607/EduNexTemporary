import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountsService {

  URL = 'http://localhost:5293'

  constructor(private httpClient: HttpClient) { }

  getCountStudentsPerCourse(courseId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.URL}/api/Courses/CountStudents?courseId=${courseId}`);
  }

  getCountLectures(courseId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.URL}/api/Courses/CountLectures?courseId=${courseId}`);
  }

  getCountAllTeachers(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/teachers/count`);
  }

  getCountAllStudents(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/students/count`);
  }
}
