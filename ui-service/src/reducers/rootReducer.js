import * as a_t from '../constants/actionTypes';

export function rootReducer(state = {}, action) {
  switch (action.type) {
    case a_t.UPDATE_FILTER:
      return {
        ...state,
        filterSearch: action.payload.newFilter,
      };
    default:
      return state;
  }
}
