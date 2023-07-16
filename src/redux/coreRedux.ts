import { put, takeEvery } from "redux-saga/effects";
import { coreActionTypes } from "./app/reduxModels";

export const changeState = ({ key, state }: any) => ({ type: coreActionTypes.CHANGE_STATE, key, state })

export class CoreState {
  constructor(
    readonly keyword: string,
  ) { }
}

const initialState: CoreState = {
  keyword: '',
}

export function* coreSaga() {
  yield takeEvery(
    coreActionTypes.CHANGE_STATE,
    ({ key, state }: any) => put({ type: coreActionTypes.CHANGE_STATE, key, state })
  )
}

export default function coreCall(state: CoreState = initialState, action: any) {
  switch (action.type) {
    case coreActionTypes.CHANGE_STATE: {
      return {
        ...state,
        [action.key]: action.state
      }
    }

    default: return state
  }
}