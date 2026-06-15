import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { Task } from './task.model';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = "angular-introduction-course";



}