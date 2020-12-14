import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class ReactiveService {
  public data$ = new ReplaySubject(10);

  constructor() {

  }

  emmitValue() {
    this.data$.next(Math.random());
  }
}
