import { InjectionToken } from "@angular/core";
import { CnDispatcher } from "../interfaces/cn-dispatcher";

export const ANY_DISPATCHER = new InjectionToken<CnDispatcher>("Dispatcher Service");