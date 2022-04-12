import { TeacherService } from './../../../services/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  id: number = 0;

  teacher: Teacher = {
    documento: '',
    nombres: '',
    apellidos: '',
    estado:'',
  }

  constructor(private teacherServices: TeacherService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    this.teacherServices.getTeacherByID(this.id).subscribe(
      res => this.teacher = res
    )
  }

  editTeacher() {
    this.teacherServices.editTeacher(this.id, this.teacher).subscribe(
      res => {
        this.router.navigate(['teacher'])
      },
      error => console.log(error)
    )
  }

}
