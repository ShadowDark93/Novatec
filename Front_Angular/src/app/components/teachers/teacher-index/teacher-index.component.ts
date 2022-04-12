import { Router } from '@angular/router';
import { TeacherService } from './../../../services/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-index',
  templateUrl: './teacher-index.component.html',
  styleUrls: ['./teacher-index.component.css']
})
export class TeacherIndexComponent implements OnInit {

  arrTeacher: any = [];

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.listTeacher();
  }

  listTeacher() {
    this.teacherService.getAllTeachers().subscribe(
      res => {
        this.arrTeacher = res;
        console.log(res)
      },
      error=>console.log(error)
    )
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(
      res => this.ngOnInit()
    )
  }
}
