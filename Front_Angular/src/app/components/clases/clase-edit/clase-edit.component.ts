import { Component, OnInit } from '@angular/core';
import { Clases } from 'src/app/models/clases';

@Component({
  selector: 'app-clase-edit',
  templateUrl: './clase-edit.component.html',
  styleUrls: ['./clase-edit.component.css']
})
export class ClaseEditComponent implements OnInit {

  clase: Clases = {
    student_id: 0,
    teacher_id: 0,
    nombre_clase: '',
    estado: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  editClass() {
    
  }

}
