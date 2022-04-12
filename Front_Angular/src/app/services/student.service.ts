import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:8080/api/student';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get(this.url);
  }

  getStudentByID(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  saveStudent(student: Student): Observable<any> {
    return this.http.post(this.url, student);
  }

  editStudent(id: number, student: Student): Observable<any> {
    return this.http.put(this.url + '/' + id, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
