import initialState from './initialState';

const informationReducer = (state = initialState.info, action) => {
  switch (action.type) {
    case 'GET_INFO':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default informationReducer;
