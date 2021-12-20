import axios from "axios";
import { LIST_CREATE_EVENT, EVENT_RETRIEVE_UPDATE} from "../constants"

export function getEventListCall(onGetEventSucces, onGetEventError, onGetEventDone){
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

export function putEventDetail(data, onPutEventSucces, onPutEventError, onPutEventDone){
  let url = EVENT_RETRIEVE_UPDATE.replace("<id>", data.id)
  axios.put(url, data)
  .then(onPutEventSucces)
  .catch(onPutEventError)
  .then(onPutEventDone);
}

export function delEventDetail(id, onDelEventSucces, onDelEventError, onDelEventDone){
  let url = EVENT_RETRIEVE_UPDATE.replace("<id>", id)
  axios.delete(url)
  .then(onDelEventSucces)
  .catch(onDelEventError)
  .then(onDelEventDone);
}
