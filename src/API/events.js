import axios from "axios";
import { LIST_CREATE_EVENT } from "../constants"

export function getEventCall(onGetEventSucces, onGetEventError, onGetEventDone){
  axios.get(LIST_CREATE_EVENT)
  .then(onGetEventSucces)
  .catch(onGetEventError)
  .then(onGetEventDone)
}

export function postEventCall(data, onPostEventSucces, onPostEventError, onPostEventDone){
  console.log(data)
  axios.post(LIST_CREATE_EVENT, data)
  .then(onPostEventSucces)
  .catch(onPostEventError)
  .then(onPostEventDone)
}
