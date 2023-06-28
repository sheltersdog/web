import { combineReducers } from "@reduxjs/toolkit"
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({  })
export function* rootSaga() {
    yield all([])
}

export default rootReducer