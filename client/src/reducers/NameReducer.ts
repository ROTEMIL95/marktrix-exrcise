import {
  Name_FAIL,
  Name_LOADING,
  Name_SUCCESS,
  NameDispatchTypes,
  NameType
} from "../actions/NameActionTypes";

interface DefaultStateI {
  loading: boolean,
  Name?: NameType,
}

const defaultState: DefaultStateI = {
  loading: false
};

const NameReducer = (state: DefaultStateI = defaultState, action: NameDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case Name_FAIL:
      return {
        loading: false,
      }
    case Name_LOADING:
      return {
        loading: true,
      }
    case Name_SUCCESS:
      return {
        loading: false,
        Name:action.payload 
      }
    default:
      return state
  }
};


export default NameReducer