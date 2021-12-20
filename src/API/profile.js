import axios from "axios";
import { PROFILE_UPDATE_ENDPOINT} from "../constants"

export function putProfileDetail(data, onPutProfileSucces, onPutProfileError, onPutProfileDone){
  let url = PROFILE_UPDATE_ENDPOINT.replace("<id>", data.id)
  axios.put(url, data)
  .then(onPutProfileSucces)
  .catch(onPutProfileError)
  .then(onPutProfileDone);
}


export function getProfileListCall(onGetProfileSucces, onGetProfileError, onGetProfileDone){
  axios.get(PROFILE_UPDATE_ENDPOINT)
  .then(onGetProfileSucces)
  .catch(onGetProfileError)
  .then(onGetProfileDone)
}

export function postProfileCall(data, onPostProfileSucces, onPostProfileError, onPostProfileDone){
  console.log(data)
  axios.post(PROFILE_UPDATE_ENDPOINT, data)
  .then(onPostProfileSucces)
  .catch(onPostProfileError)
  .then(onPostProfileDone)
}
