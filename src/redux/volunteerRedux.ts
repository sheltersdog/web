import { createPromise } from "./app/reduxAsyncUtils"
import * as addressApi from '../api/addressApi'
import * as volunteerApi from '../api/volunteerApi'
import { ReduxState } from "../dto/reduxState"
import { AddressDto } from "../dto/address/AddressDto"
import { volunteerStates, volunteersActionTypes } from "./volunteerReduxModels"
import { put, takeEvery } from "redux-saga/effects"
import { coreActionTypes } from "./app/reduxModels"
import { VolunteerDto } from "../dto/volunteer/VolunteerDto"

export const reset = ({ key }: any) => ({ type: coreActionTypes.RESET, key })

export const getVolunteers = ({ payload }: any) => ({ type: volunteersActionTypes.GET_VOLUNTEERS, payload })
export const getAddresses = ({ key, payload }: any) => ({ type: volunteersActionTypes.GET_ADDRESS_FILTERS, key, payload })
export const getFilterCategories = ({ payload }: any) => ({ type: volunteersActionTypes.GET_CATEGORY_FILTERS, payload })

const getVolunteersSage = createPromise(volunteersActionTypes.GET_VOLUNTEERS, volunteerApi.getVolunteers)
const getAddressesSaga = createPromise(volunteersActionTypes.GET_ADDRESS_FILTERS, addressApi.getAddresses)
const getFilterCategoriesSaga = createPromise(volunteersActionTypes.GET_CATEGORY_FILTERS, volunteerApi.getCategories)

export class VolunteerState {
  constructor(
    readonly volunteers: ReduxState<VolunteerDto[]>,
    readonly sidoAddressFilters: ReduxState<AddressDto[]>,
    readonly sggAddressFilters: ReduxState<AddressDto[]>,

    readonly categoryFilters: ReduxState<string[]>,
  ) { }
}

const initialState: VolunteerState = {
  volunteers: new ReduxState<VolunteerDto[]>(false, null, null),
  sidoAddressFilters: new ReduxState<AddressDto[]>(false, null, null),
  sggAddressFilters: new ReduxState<AddressDto[]>(false, null, null),

  categoryFilters: new ReduxState<string[]>(false, null, null),
}

export function* volunteerSaga() {
  yield takeEvery(
    coreActionTypes.RESET,
    ({ key }: any) => put({ type: coreActionTypes.RESET, key })
  )

  yield takeEvery(volunteersActionTypes.GET_VOLUNTEERS, getVolunteersSage)
  yield takeEvery(volunteersActionTypes.GET_ADDRESS_FILTERS, getAddressesSaga)
  yield takeEvery(volunteersActionTypes.GET_CATEGORY_FILTERS, getFilterCategoriesSaga)
}

export default function volunteerCall(state: VolunteerState = initialState, action: any) {
  switch (action.type) {
    case coreActionTypes.RESET: {
      return {
        ...state,
        [action.key]: new ReduxState<AddressDto[]>(false, null, null),
      }
    }

    case volunteersActionTypes.GET_VOLUNTEERS_SUCCESS: {
      return {
        ...state,
        [volunteerStates.volunteers]: new ReduxState(false, action.response.data, false)
      }
    }

    case volunteersActionTypes.GET_ADDRESS_FILTERS_SUCCESS: {
      return {
        ...state,
        [action.key]: new ReduxState(false, action.response.data, false)
      }
    }

    case volunteersActionTypes.GET_CATEGORY_FILTERS_SUCCESS: {
      return {
        ...state,
        [volunteerStates.categoryFilters]: new ReduxState(false, action.response.data, false)
      }
    }

    case volunteersActionTypes.GET_VOLUNTEERS_ERROR:
    case volunteersActionTypes.GET_ADDRESS_FILTERS_ERROR:
    case volunteersActionTypes.GET_CATEGORY_FILTERS_ERROR: {
      alert('작업에 실패했습니다. 다시 시도해주세요.')
      return
    }

    default: return state;
  }

}