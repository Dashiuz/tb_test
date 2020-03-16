import { ADD_STRING } from "../constants/action-types";

export function addString(payload) {
  console.log("PAYLOAD: " + JSON.stringify(payload))
  return { type: ADD_STRING, payload }
};