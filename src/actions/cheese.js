import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST= 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheeseesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error
});

export const fetchCheeses = () => (dispatch) => {
  console.log('fetch is running');
  dispatch(fetchCheesesRequest());
  return fetch(`${API_BASE_URL}/api/cheeses`)
    .then(res => res.json())
    .then((cheeses) => dispatch(fetchCheeseesSuccess(cheeses)))
    .catch(err => {dispatch(fetchCheesesError(err));
    });
};

