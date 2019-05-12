import { ACTION_SUCCESS } from '../constants/actionStatus'

const initialState = {
  newReducer: null,
};

export default ( state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SUCCESS:
      return {
        ...state,
        newReducer: payload,
      }

    default:
      return state;

  }
}
