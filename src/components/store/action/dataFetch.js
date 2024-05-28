// Define action types
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action creators
const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

 const fetchData = () => {
    return async (dispatch) => {
      dispatch(fetchDataRequest());
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=9');
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };

export{ fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    fetchData

}
