import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import "react-toastify/dist/ReactToastify.css";
import { app } from './firebase.config.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider app={app} store={store}>
    <PersistGate Loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
</React.StrictMode>,

)
