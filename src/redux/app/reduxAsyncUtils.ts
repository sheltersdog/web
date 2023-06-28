import { AxiosResponse } from "axios"
import { call, put } from "redux-saga/effects"
import { ReduxState } from "../../dto/reduxState"

export const createPromise = (type: any, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

  return function* saga(action: any) {
    try {
      const response: AxiosResponse<any> = yield call(promiseCreator, action.payload)
      yield put({ type: SUCCESS, response })
    } catch (e: any) {
      yield put({ type: ERROR, error: true, payload: e })
    }
  }
}

export const handleAsyncActions = (type: string, key: string, keepData: boolean = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
  return (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: ReduxState.loading(keepData ? state[key].data : null)
        }
      case SUCCESS:
        return {
          ...state,
          [key]: ReduxState.success(action.response.data.infos)
        }
      case ERROR:
        return {
          ...state,
          [key]: ReduxState.error(action.error)
        }
      default:
        return state
    }

  }
}