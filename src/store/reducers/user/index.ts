import { Action } from 'redux'
import { fromJS } from 'immutable'

/**
 * contants
 */
export const CHANGE_NAME: 'CHANGE_NAME' = 'CHANGE_NAME'
export const CHANGE_GENDER: 'CHANGE_GENDER' = 'CHANGE_GENDER'

/**
 * Action
 */
export const change_name = (value: string): Action & { payload: any } => ({
  type: CHANGE_NAME,
  payload: value
})
export const change_gender = (value: string): Action & { payload: any } => ({
  type: CHANGE_GENDER,
  payload: value
})

/**
 * Type
 */
export interface User {
  get: any;
  name: string;
  gender: '男' | '女';
}
type ActionPayload = {
  payload: any;
}

/**
 * Initial State
 */
const inititalState: User = {
  get: '',
  name: '',
  gender: '男'
}

/**
 * Helper
 */
const change_state = (state: User, key: string, value: string) =>
  fromJS(state).set(key, value)

/**
 * Reducer core
 */
const userReducer = (
  state: User = inititalState,
  action: Action & ActionPayload
) => {
  switch (action.type) {
    case CHANGE_NAME:
      return change_state(state, 'name', action.payload)
    case CHANGE_GENDER:
      return change_state(state, 'gender', action.payload)
    default:
      return fromJS(state)
  }
}

export default userReducer
