export const ADD_RIPPLE = 'ADD_RIPPLE';
export const REMOVE_RIPPLE = 'REMOVE_RIPPLE';
export const ADD_TETHER = 'ADD_TETHER';
export const REMOVE_TETHER = 'REMOVE_TETHER';

export const TOGGLE_VIEW = 'TOGGLE_VIEW';

export function addTether() {
    console.log("tethering")
    return { type: ADD_TETHER }
  }
  
export function removeTether() {
    return { type: REMOVE_TETHER }
}

export function addRipple() {
    return { type: ADD_RIPPLE }
}

export function removeRipple() {
    return { type: REMOVE_RIPPLE }
}

export function toggleView() {
  return { type: TOGGLE_VIEW }
}