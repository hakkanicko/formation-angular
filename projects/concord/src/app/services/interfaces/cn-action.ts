import { CnActionTypes } from "../enum/cn-action-types.enum";

export interface CnAction {
  type: CnActionTypes;
  payload?: any;
}
