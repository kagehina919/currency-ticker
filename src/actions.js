export const ADD_RIPPLE = 'ADD_RIPPLE';
export const REMOVE_RIPPLE = 'REMOVE_RIPPLE';
export const ADD_TETHER = 'ADD_TETHER';
export const REMOVE_TETHER = 'REMOVE_TETHER';
export const DELETE_VIEW = 'DELETE_VIEW';
export const RESET_VIEW = 'RESET_VIEW';

export const TOGGLE_VIEW = 'TOGGLE_VIEW';

export function addTether() {
    return { type: ADD_TETHER } //type is necessary for the action. Type enables reducer to understand what to do.
  } //this just defines an action. Can send other things then type.Reducer takes this action and state to give new state.
  
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

export function deleteView() {
    return { type: DELETE_VIEW }
}

export function resetView() {
    return { type: RESET_VIEW }
}