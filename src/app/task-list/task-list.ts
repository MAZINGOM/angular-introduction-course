import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { TaskService } from '../task-service';
import { DatePipe } from "@angular/common";
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  imports: [DatePipe,RouterLink],
})
export class TaskList {

  private taskService = inject(TaskService);

  tasks = this.taskService.tasks;
}
