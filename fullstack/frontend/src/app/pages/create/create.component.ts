import { Component } from '@angular/core';
import { GenericFormComponent } from '../../components/generic-form/generic-form.component';
import { Task } from '../../models/task.model';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';
//import { error } from 'console';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [GenericFormComponent ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})


export class CreateComponent {
  
  constructor(
    private router:Router,
    private crudService:CrudService,
    private alertifyService:AlertifyService
  ){}

  onSubmit(task:Task){
    console.log(task)
    this.crudService.createTask(task).subscribe({
      next:()=>{
        this.alertifyService.success('Tarea Creada')
        this.router.navigateByUrl("/")
      },
      error:(error)=>{
        this.alertifyService.error(error)
      }
    })
  }
}
