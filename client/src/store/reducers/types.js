import { SET_TYPE, SET_TYPES, SET_ACTIVE_TYPE } from "../../const/duckKeys";

const initState = {
  types: [],
  selectedTypeId: null,
};

const typeReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TYPE:
      state.types.push(payload);

      return { ...state };
    case SET_TYPES:
      state.types.push(...payload);

      return { ...state };
    case SET_ACTIVE_TYPE:
      state.selectedTypeId =
        payload.id === state.selectedTypeId ? null : payload.id;

      return { ...state };
    default:
      return state;
  }
};

export default typeReducer;
