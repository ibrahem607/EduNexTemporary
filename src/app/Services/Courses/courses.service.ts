import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse, ISubject } from 'src/app/Model/icourse';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  URL = 'http://localhost:5293'

  constructor(private httpClient: HttpClient) { }

  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.URL}/api/Courses`);
  }

  getCourseById(courseId: number): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.URL}/api/Courses/${courseId}`);
  }

  deleteCourseById(courseId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.URL}/api/Courses/${courseId}`);
  }

  addCourse(courseData: FormData): Observable<ICourse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post<ICourse>(`${this.URL}/api/Courses`, courseData, { headers });
  }

  editCourse(courseId: number, updatedCourse: FormData): Observable<void> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.put<void>(`${this.URL}/api/Courses/${courseId}`, updatedCourse, { headers });
  }

  getCoursesEnrolledByStudent(studentId: string): Observable<ICourse[]> {
    const params = new HttpParams().set('studentId', studentId);
    return this.httpClient.get<ICourse[]>(`${this.URL}/api/Courses/GetCoursesEnrolledByStudent`, { params });
  }

  checkEnrollment(courseId: number, studentId: string): Observable<boolean> {
    const params = new HttpParams().set('studentId', studentId).set('courseId', courseId);
    return this.httpClient.get<boolean>(
      `${this.URL}/api/Courses/checkenrollment`,
      { params }
    );
  }

  courseEnroll(studentId: string, courseId: number, couponCode: string): Observable<ICourse> {
    const params = new HttpParams().set('couponcodes', couponCode);

    return this.httpClient.post<ICourse>(
      `${this.URL}/api/Courses/enroll`,
      { studentId, courseId },
      { params }
    );
  }

  getCountStudents(courseId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.URL}/api/Courses/CountStudents?courseId=${courseId}`);
  }

  getCountLectures(courseId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.URL}/api/Courses/CountLectures?courseId=${courseId}`);
  }

  getAllTeacherCourses(teacherId: string): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.URL}/api/Courses/GetTeacherCourses?teacherId=${teacherId}`);
  }

  getAllSubjects(): Observable<ISubject[]> {
    return this.httpClient.get<ISubject[]>(`${this.URL}/api/Courses/get-All-Subject`);
  }
}
