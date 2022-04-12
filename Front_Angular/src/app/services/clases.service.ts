import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clases } from '../models/clases';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  url = 'http://localhost:8080/api/clases';

  constructor(private http: HttpClient) { }

  getAllClase(): Observable<any> {
    return this.http.get(this.url);
  }

  getClaseByID(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  saveClase(clase: Clases): Observable<any> {
    return this.http.post(this.url, clase);
  }

  editClase(id: number, clase: Clases): Observable<any> {
    return this.http.put(this.url + '/' + id, clase);
  }

  deleteClase(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
