import { ClaseEditComponent } from './components/clases/clase-edit/clase-edit.component';
import { ClaseCreateComponent } from './components/clases/clase-create/clase-create.component';
import { ClaseIndexComponent } from './components/clases/clase-index/clase-index.component';
import { TeacherEditComponent } from './components/teachers/teacher-edit/teacher-edit.component';
import { TeacherCreateComponent } from './components/teachers/teacher-create/teacher-create.component';
import { TeacherIndexComponent } from './components/teachers/teacher-index/teacher-index.component';
import { StudentIndexComponent } from './components/students/student-index/student-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './components/students/student-create/student-create.component';
import { StudentEditComponent } from './components/students/student-edit/student-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  
  { path: 'students', component: StudentIndexComponent },
  { path:'students/create', component: StudentCreateComponent},
  { path: 'students/:id', component: StudentEditComponent },
  
  { path: 'teacher', component: TeacherIndexComponent },
  { path: 'teacher/create', component: TeacherCreateComponent },
  { path: 'teacher/:id', component: TeacherEditComponent },

  { path: 'clases', component: ClaseIndexComponent },
  { path: 'clases/create', component: ClaseCreateComponent },
  { path: 'clases/:id', component: ClaseEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
