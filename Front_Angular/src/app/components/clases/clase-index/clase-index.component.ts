import { ClasesService } from './../../../services/clases.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clase-index',
  templateUrl: './clase-index.component.html',
  styleUrls: ['./clase-index.component.css']
})
export class ClaseIndexComponent implements OnInit {

  arrClases:any = [];

  constructor(private claseService: ClasesService, private router: Router) { }

  ngOnInit(): void {
    this.listClass();
  }

  listClass() {
    this.claseService.getAllClase().subscribe(
      res => {
        this.arrClases = res;
        console.log(res)
      },
      error=>console.log(error)
    )
  }

  deleteClass(id: number) {
    this.claseService.deleteClase(id).subscribe(
      res => {
        this.ngOnInit(),
        this.router.navigate(['clases'])
      },
      error=>console.log(error)
    )
  }

}
