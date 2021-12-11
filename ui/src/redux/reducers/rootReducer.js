import {combineReducer} from 'redux'
import documentReducer from './documentReducer'
import contactReducer from './contactReducer'
import educationReducer from './educationReducer'
import { firebaseReducer } from 'react-redux-firebase';
import {firebaseReducer} from 'redux-firestore';
import authReducer from './authReducer';
// import authReducer from './authReducer';
const rootReducer=combineReducers({
    document:documentReducer,
    contact:contactReducer,
    education:educationReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer, 
    auth:authReducer
})
export const rootReducer