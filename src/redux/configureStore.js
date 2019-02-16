import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(state) {
  return compose(applyMiddleware(thunk))(createStore)(
    rootReducer,
    state,
  );
}
