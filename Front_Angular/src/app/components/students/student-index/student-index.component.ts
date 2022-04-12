import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  arrStudent: any = [];

  ngOnInit(): void {
    this.listarStudent();
  }

  listarStudent() {
    this.studentService.getAllStudents().subscribe(
      res => {
        this.arrStudent = res;
        console.log(res);
      }, error => console.log(error)
    )
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      res => {
        this.ngOnInit();
      }, error => console.log(error)
    )

  }

}
