import axios from "axios";
import { VERSION_ENDPOINT } from "../constants"
import { HELLO_ENDPOINT } from "../constants"

export function getVersion(onSucces, onError, onDone){
  console.log("start")
    console.log(VERSION_ENDPOINT)
  axios.get(VERSION_ENDPOINT)
  .then(onSucces)
  .catch(onError)
  .then(onDone)
    console.log("finish")
}

export function postHello(data, onPostHelloSucces, onPostHelloError, onPostHelloDone){
  axios.post(HELLO_ENDPOINT, data)
  .then(onPostHelloSucces)
  .catch(onPostHelloError)
  .then(onPostHelloDone)
}
