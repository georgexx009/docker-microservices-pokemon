import { UPDATE_FILTER } from '../constants/actionTypes';

export function updateFilter(newFilter) {
  return {
    type: UPDATE_FILTER,
    payload: {
      newFilter,
    },
  };
}
