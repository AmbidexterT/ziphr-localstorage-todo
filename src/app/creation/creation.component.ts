import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Todo } from '../shared/interfaces/todo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
})
export class CreationComponent implements OnInit, OnDestroy {

  /** Subscription for observables to unsubscribe after component destroy. */
  private readonly subscription = new Subscription();

  /** todos. */
  todos: Todo[] = [];

  constructor(private appService: AppService) {
    console.debug('CreationComponent initiated.');
  }

  /** Reactive form for create todo.
   Could put date as current day for Simplifications
   */
  creationForm = new FormGroup({
    title: new FormControl('', Validators.required),
    done: new FormControl(false),
    date: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
  });

  /** getter for title directive.
   Need for checking required validation */
  get _title() {
    return this.creationForm.get('title')
  }

  /** getter for priority directive.
   Need for checking required validation */
  get _priority() {
    return this.creationForm.get('priority')
  }

  /** getter for date directive.
   Need for checking required validation */
  get _date() {
    return this.creationForm.get('date')
  }

  ngOnInit(): void {
    this.subscription.add(this.appService.todos.subscribe({
      next: (value: Todo[]): void => {
        this.todos = value;
      },
    }));
  }

  save() {
    // @ts-ignore
    this.appService.todos.next(this.todos.concat(this.creationForm.value))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
