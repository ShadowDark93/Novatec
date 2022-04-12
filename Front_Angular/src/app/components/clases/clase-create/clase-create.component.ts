import { Component, OnInit } from '@angular/core';
import { Clases } from 'src/app/models/clases';

@Component({
  selector: 'app-clase-create',
  templateUrl: './clase-create.component.html',
  styleUrls: ['./clase-create.component.css']
})
export class ClaseCreateComponent implements OnInit {

  newClass: Clases = {
    student_id:0,
    teacher_id: 0,
    nombre_clase: '',
    estado: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  addClass() {
    
  }

}
