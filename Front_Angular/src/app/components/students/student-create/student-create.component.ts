import { StudentService } from './../../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  newStudent: Student = {
    documento: '',
    nombres: '',
    apellidos: '',
    grado: '',
    estado: ''
  }

  constructor( private studenService: StudentService, private router: Router ) { }

  ngOnInit(): void {
  }

  addStudent() {
    this.studenService.saveStudent(this.newStudent).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/students']);
      },
      error => console.log(error)

    );

  }

}
