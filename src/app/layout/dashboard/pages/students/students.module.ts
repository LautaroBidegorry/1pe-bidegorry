import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module'; 
import { StudentsComponent } from './students.component';
import { FormBuilder } from '@angular/forms';
import { IUser } from './models/index';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule

    
  ],
  exports :[
    StudentsComponent,
    StudentDialogComponent
  ]
})
export class StudentsModule { 
  
  
}