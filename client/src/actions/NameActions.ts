import {Dispatch} from "redux";
import {Name_FAIL, Name_LOADING, Name_SUCCESS, NameDispatchTypes} from "./NameActionTypes";
import axios from "axios";

export const GetName = (Name: string ) => async (dispatch: Dispatch<NameDispatchTypes>) => {
  try {
    dispatch({
      type: Name_LOADING
    })

    const res = await axios.post(`http://localhost:3500/user/info/`, {"name": `${Name}` })
    const User = res.data
    console.log(User)

    dispatch({
      type: Name_SUCCESS,
      payload: User
    })

  } catch(e) {
    dispatch({
      type: Name_FAIL
    })
  }
};