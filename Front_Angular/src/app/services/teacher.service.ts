import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url='http://localhost:8080/api/teachers'

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<any>{
    return this.http.get(this.url);
  }

  getTeacherByID(id: number): Observable<any>{
    return this.http.get(this.url + '/' + id);
  }

  saveTeacher(teacher: Teacher): Observable<any>{
    return this.http.post(this.url, teacher);
  }

  editTeacher(id: number, teacher: Teacher): Observable<any>{
    return this.http.put(this.url + '/' + id, teacher);
  }

  deleteTeacher(id: number): Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }
}
