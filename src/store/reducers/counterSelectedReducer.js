const initialState = {
  selectedId: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECTED_COUNTER':
      
      return {
        selectedId: action.payload
      };

    default:
      return state;
  }
}
