import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './Context/Context.jsx'
import {Provider} from 'react-redux'
import store from './Redux/store.js'
createRoot(document.getElementById('root')).render(
  <Context>
   
  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
  </Context>,
)
