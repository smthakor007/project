const initialState = {
  list: [],
  editIndex: null,
  editValue: ""
};

export const myReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return { ...state, list: [...state.list, action.payload] };
  }

  if (action.type === "DELETE") {
    return {
      ...state,
      list: state.list.filter((_, i) => i !== action.payload)
    };
  }

  if (action.type === "SELECT_EDIT") {
    return {
      ...state,
      editIndex: action.payload.index,
      editValue: action.payload.value
    };
  }

  if (action.type === "UPDATE") {
    return {
      ...state,
      list: state.list.map((el, i) =>
        i === action.payload.index ? action.payload.value : el
      ),
      editIndex: null,
      editValue: ""
    };
  }

  return state;
};
