import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of as ObservableOf } from "rxjs";
import { CnAction } from "./interfaces/cn-action";
import { CnDispatcher } from "./interfaces/cn-dispatcher";

@Injectable()
export class DispatcherService implements CnDispatcher {
  state$ = new BehaviorSubject({});

  _history = [];

  constructor() {
    window["appActions"] = () => this.userHistory();
  }

  userHistory() {
    console.groupCollapsed("Past Actions");
    console.table(this._history);
    console.groupEnd();
  }

  dispatch(action: CnAction): Observable<true | { error: string }> {
    this._history.push(
      Object.assign({}, action, { time: Date.now().toLocaleString() })
    );
    return ObservableOf({ error: "Not Yet Implemented !" });
  }
}
