import axios from "axios"
import { FETCH_USER } from "./types"

//redux-thunk automatically passes dispatch when it sees we are returning a function
//calls the function with dispatch passed by parameter
//so we don;t want to automatically dispatch a function
//we want to do it when the res is ready in the case of async functions
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user")
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token)
  dispatch({ type: FETCH_USER, payload: res.data })
}
