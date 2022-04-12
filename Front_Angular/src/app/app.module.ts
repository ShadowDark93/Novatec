import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeacherEditComponent } from './components/teachers/teacher-edit/teacher-edit.component';
import { TeacherIndexComponent } from './components/teachers/teacher-index/teacher-index.component';
import { TeacherCreateComponent } from './components/teachers/teacher-create/teacher-create.component';
import { StudentEditComponent } from './components/students/student-edit/student-edit.component';
import { StudentIndexComponent } from './components/students/student-index/student-index.component';
import { StudentCreateComponent } from './components/students/student-create/student-create.component';
import { ClaseIndexComponent } from './components/clases/clase-index/clase-index.component';
import { ClaseCreateComponent } from './components/clases/clase-create/clase-create.component';
import { ClaseEditComponent } from './components/clases/clase-edit/clase-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeacherEditComponent,
    TeacherIndexComponent,
    TeacherCreateComponent,
    StudentEditComponent,
    StudentIndexComponent,
    StudentCreateComponent,
    ClaseIndexComponent,
    ClaseCreateComponent,
    ClaseEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
