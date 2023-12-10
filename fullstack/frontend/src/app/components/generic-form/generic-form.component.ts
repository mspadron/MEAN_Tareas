import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { CrudService } from '../../services/crud.service';
//import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterLink, RouterLinkActive],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
  ) {}

  formTask:FormGroup
  @Input()
  modelTask: Task

  @Output()
  submitValues:EventEmitter<Task> = new EventEmitter<Task>()

  ngOnInit(): void {
   this.formTask = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    dueDate: ['', Validators.required],
    status: [false, Validators.required],
   })
   if(this.modelTask!==undefined){
     this.formTask.patchValue(this.modelTask)
   }
  }

  onSubmit():void{
    this.submitValues.emit(this.formTask.value)  
  }

}
