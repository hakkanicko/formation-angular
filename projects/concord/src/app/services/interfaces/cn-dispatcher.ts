import { BehaviorSubject, Observable } from "rxjs";
import { CnAction } from "./cn-action";
import { CnState } from "./cn-state";

export interface CnDispatcher {
    state$: BehaviorSubject<CnState>;

    dispatch(action: CnAction): Observable<{error: string} | true>
}
