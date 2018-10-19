import { INCREASE, DECREASE } from './actions'

export default function count(state, action) {
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case DECREASE:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    default:
      return state
  }
}