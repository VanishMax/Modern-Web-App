import response from '../response'

export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const GET_CORGI = 'GET_CORGI'


export function increase() {
  return {
    type: INCREASE
  }
}
export function decrease() {
  return {
    type: DECREASE
  }
}

export const getCorgi = () => async (dispatch) => {
  const result = await response(
    'https://dog.ceo/api/breed/corgi/cardigan/images/random',
  );
  dispatch({ type: GET_CORGI, payload: result.message })
};
