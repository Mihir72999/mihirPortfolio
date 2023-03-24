import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Error from './component/404';

import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './component/Login';
import { Provider } from 'react-redux';
import store from './component/state/store/store';
import ContactUs from './component/ContactUs';
import Home from './component/Home';
import About from './component/About';
import Personal from './component/Personal';
import Biodata from './component/Biodata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    
    
     <Routes>
      <Route  path='/' element={<Login/>} />
      <Route  path='/home'  element={<Home />} />
      <Route path='/contact' element={<Personal/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Biodata/>} />
      <Route path='/contactform' element={<ContactUs/>} />
      <Route path='*' element={<Error/>} />
        
   
       </Routes>
    
    
    </Router>
  
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

