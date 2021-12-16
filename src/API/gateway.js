import axios from "axios"
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../constants"

export function postLogin(data, onPostLoginSuccess, onPostLoginError, onPostLoginDone){
    axios.post(LOGIN_ENDPOINT, data)
  .then(onPostLoginSuccess)
  .catch(onPostLoginError)
  .then(onPostLoginDone)
}

export function postRegister(data, onPostRegisterSuccess, onPostRegisterError, onPostRegisterDone){
    axios.post(REGISTER_ENDPOINT, data)
  .then(onPostRegisterSuccess)
  .catch(onPostRegisterError)
  .then(onPostRegisterDone)
}
