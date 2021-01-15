const initialState = {
  count: 0,
  selectedCounter: null,
  counters: []
};

const countersReducer = (state = initialState, action) => {
  console.log(action.type, action.payload)
  let contadores;
  switch (action.type) {
    case 'CREATE_COUNTER':
      return {
        ...state,
        counters: [
          ...state.counters,
          {
            id: state.counters.length > 0 ? state.counters[state.counters.length - 1].id + 1 : 0,
            selected: false,
            countVal: 0,
          }
        ]
      }
    case 'DELETE_COUNTER':
      contadores = [...state.counters];
      let delIndex = contadores.findIndex(i => i.id === state.selectedCounter);
      contadores.splice(delIndex, 1);
      return {
        ...state,
        counters: [
          ...contadores
        ]
      }
    case 'COUNTER_CHANGE':
      console.log('COUNTER_CHANGE', action.payload)
      contadores = [...state.counters];
      contadores.find(i => i.id === state.selectedCounter).countVal = action.payload;
      return {
        ...state,
        counters: [
          ...contadores
        ]
      };
    case 'SELECT_COUNTER':
      console.log('action.payload :>> ', action.payload);
      return {
        ...state,
        selectedCounter: action.payload,
      }

    default:
      return state;
  }
}

export default countersReducer;