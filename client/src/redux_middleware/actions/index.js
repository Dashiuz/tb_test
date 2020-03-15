import { ADD_STRING } from "../constants/action-types";

export function addString(payload) {
  return { type: ADD_STRING, payload }
};