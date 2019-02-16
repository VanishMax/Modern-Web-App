import { INCREASE, DECREASE, GET_CORGI } from './actions'

const initialState = {
  corgi: "",
  count: 5,
  mobile: null,
}

export default function count(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {...state, count: state.count + 1 }
    case DECREASE:
      return {...state, count: state.count - 1 }
    case GET_CORGI:
      return { ...state, corgi: action.payload }
    default:
      return state
  }
}
