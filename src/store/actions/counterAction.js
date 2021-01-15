
export const createCounter = () => ({ type: 'CREATE_COUNTER' });
export const deleteCounter = () => ({ type: 'DELETE_COUNTER' });
export const selectCounter = (identif) => ({ type: 'SELECT_COUNTER', payload: identif });
export const changeCount = (count) => {
  console.log('changeCount - count :>> ', count);
  return ({ type: 'COUNTER_CHANGE', payload: count })
};
