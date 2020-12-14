import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

export interface CnManager<T> {
  data$: Subject<T[]> | ReplaySubject<T[]> | BehaviorSubject<T[]>;

  create(payload: Partial<T>): Observable<{ error: string } | true>;
  read(id?:number): Observable<{ error: string } | true>;
  update(target:T, updates: Partial<T>): Observable<{ error: string } | true>;
  delete(target:T): Observable<{ error: string } | true>;
}
