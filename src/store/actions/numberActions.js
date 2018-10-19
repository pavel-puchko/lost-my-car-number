export const foundNumber = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('numbers').add({
      ...project,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'FOUND_NUMBER_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'FOUND_NUMBER_ERROR' }, err);
    });
  }
};