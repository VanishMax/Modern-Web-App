export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

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