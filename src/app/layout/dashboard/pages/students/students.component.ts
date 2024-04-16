import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { IUser } from './models/index';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  constructor(private FormBuilder: FormBuilder, private matDialog: MatDialog) {}

  displayedColumns: string[] = [
    'Clase',
    'NombreCompleto',
    'role',
    'Edad', 
    'id',
    'actions',
    
  ];

 alumnos: IUser[] = [
    {}];



  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(StudentDialogComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
       
              this.alumnos = this.alumnos.map((u) =>
                u.id === editingUser.id ? { ...u, ...result } : u
              );
            } else {
              
              result.id = new Date().getTime().toString().substring(0, 3);
              this.alumnos = [...this.alumnos, result];
            }
          }
        },
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('usted desea eliminar el usuario?')) {
      this.alumnos = this.alumnos.filter((u) => u.id != id);
    }
  }


}