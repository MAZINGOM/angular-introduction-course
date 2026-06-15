import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { TaskService } from '../task-service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  private taskService = inject(TaskService);

  tasks = this.taskService.tasks;
}
