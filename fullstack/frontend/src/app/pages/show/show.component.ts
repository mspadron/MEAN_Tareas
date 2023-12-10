import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/task.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from '../../services/alertify.service';
@Component({
  selector: 'app-show',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, CommonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
  faCirclePlus = faCirclePlus
  faPen = faPen
  faTrash = faTrash
  tasks: Task[] = []
  constructor(private crudService: CrudService,
    private alertifyService: AlertifyService) {

  }

  ngOnInit(): void {
    this.crudService.getTasks().subscribe((res: Task[]) => {
      //console.log(res);
      this.tasks = res
    })
  }

  delete(id: any, index: any) {
    this.alertifyService.confirm({
      message: "¿Estás seguro que quieres eliminar la tarea?",
      callback_delete: () => {
        this.crudService.deleteTask(id).subscribe((res) => {
          this.tasks.splice(index, 1)
        })
      }
    })

  }
}
