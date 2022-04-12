import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {

  newTeacher: Teacher = {
    documento: '',
    nombres: '',
    apellidos: '',
    estado: '',
  }

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
  }

  addTeacher() {
    this.teacherService.saveTeacher(this.newTeacher).subscribe(
      res => {
        this.router.navigate(['/teacher'])
      },
      error => console.log(error)
    )
  }

}
