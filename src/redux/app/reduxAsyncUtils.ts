import { AxiosResponse } from "axios"
import { call, put } from "redux-saga/effects"

export const createPromise = (type: any, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

  return function* saga(action: any) {
    try {
      const response: AxiosResponse<any> = yield call(promiseCreator, action.payload)
      yield put({
        ...action,
        type: SUCCESS,
        response
      })
    } catch (e: any) {
      yield put({ type: ERROR, error: true, payload: e })
    }
  }
}