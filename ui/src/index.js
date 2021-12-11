import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import thunk from 'redux-thunk'
import {reduxFirestore, getFireStore} from 'redux-firestore'
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCdNWiAZwnhPoucqFC0gduaYLMpecc3eCU",
  authDomain: "resume-builder-44f33.firebaseapp.com",
  projectId: "resume-builder-44f33",
  storageBucket: "resume-builder-44f33.appspot.com",
  messagingSenderId: "218472931936",
  appId: "1:218472931936:web:5a267839c3fbe0b65a5905"
};

const reduxStore=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFireStore})),reduxFirestore(firebase))); 



ReactDOM.render(

    <BrowserRouter>
    <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App/>
    </ReactReduxFirebaseProvider>
  </Provider>
    </BrowserRouter>
,
  document.getElementById('root')
);