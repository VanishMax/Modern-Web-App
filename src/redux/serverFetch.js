import * as Actions from '&/redux/actions'

export async function serverFetch(store) {
  await store.dispatch(Actions.getCorgi())
}
