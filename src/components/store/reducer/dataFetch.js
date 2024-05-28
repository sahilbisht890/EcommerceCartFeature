import { FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST } from "../action/dataFetch";
const initialState = {
    loading: true,
    data: [],
    error: null
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export {
    dataReducer,
  };
  