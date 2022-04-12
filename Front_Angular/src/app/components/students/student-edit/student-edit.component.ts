import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id: number=0;
  
  student: Student = {
    documento: '',
    nombres: '',
    apellidos: '',
    grado: '',
    estado: '',
  }

  constructor(
    private studentService: StudentService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    this.studentService.getStudentByID(this.id).subscribe(
      res => this.student = res
   )
  }

  editStudent() {
    this.studentService.editStudent(this.id, this.student).subscribe(
      res => {
        this.router.navigate(['students'])
      },
      error => console.log(error)
    )
  }

}
