import { Component, OnInit } from '@angular/core';
import { GenericFormComponent  } from '../../components/generic-form/generic-form.component';
import { CrudService } from '../../services/crud.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { AlertifyService } from '../../services/alertify.service';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [GenericFormComponent,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  id!:any
  model: Task
  constructor(
    private crudService:CrudService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private alertifyService:AlertifyService
  ){

  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.crudService.getTask(this.id).subscribe((res)=>{
      this.model = {
        _id:res.id,
        title:res.title,
        description:res.description,
        dueDate:res.dueDate,
        status:res.status
        
      }
    })
  }

  onSubmit(task:Task){
    this.crudService.updateTask(this.id,task).subscribe({
      next: ()=>{
        this.alertifyService.success('Tarea Actualizada')
        this.router.navigateByUrl('/')
      },
      error:(error)=>{
        this.alertifyService.error(error)
      }
    })
  }


}
