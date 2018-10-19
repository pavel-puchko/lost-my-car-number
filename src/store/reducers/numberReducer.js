const initState = {}

const numberReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FOUND_NUMBER_SUCCESS':
      console.log('create project success');
      return state;
    case 'FOUND_NUMBER_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default numberReducer;