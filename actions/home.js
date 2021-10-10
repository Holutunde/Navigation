import { RETRIEVE_TOKEN, LOGIN, LOGOUT, REGISTER } from '../types/index.js'

export const retrieve_token = (token) => (dispatch) => {
  dispatch({
    type: RETRIEVE_TOKEN,
    payload: token,
  })
}

export const login = () => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: true,
  })
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: true,
  })
}

export const register = () => (dispatch) => {
  dispatch({
    type: REGISTER,
    payload: true,
  })
}
