import numberReducer from './numberReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  number: numberReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
