

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Backgroundimg } from './Screen/Backgroundimg';
import { UserApproval } from './Screen/UserApproval';

//import { Food } from './Screen/Food';



import { User } from './Screen/User';
import { Restaurant } from './Screen/Restaurant';
import { Us } from './Screen/Food';
import { Cart } from './Screen/Cart';
import Login from './Screen/Login';
import { Elements } from '@stripe/react-stripe-js';

import { stripePromise } from './Screen/Cart';
import { AboutUs } from './Screen/AboutUs';




function App() {
  return (
  
    <div className="App">

      
      {/* <User/>  */}
      
    <div className='main' id="backgroundimg">
    
    </div>
    
    <BrowserRouter>
    
       <Routes>
       
      <Route>
      
          <Route path="/" element = {<Backgroundimg/>}/>
          <Route path="/user" element = {<User/>}/>
          <Route path="/backgroundimg" element = {<Backgroundimg/>}/>
          <Route path="/userApproval" element = {<UserApproval/>}/>
          {/* <Route path="/restaurant" element = {<Restaurant/>}/> */}
          <Route path="/restaurant" element={
            <Elements stripe={stripePromise}>
              <Restaurant />
            </Elements>
          } />
          <Route path="/aboutUs" element = {<AboutUs/>}/>
          <Route path="/us" element = {<Us/>}/>
          {/* <Route path="/cart" element = {<Cart/>}/> */}
          <Route path="/login" element = {<Login/>}/>
          <Route path="/cart" element={
            <Elements stripe={stripePromise}>
              <Cart />
            </Elements>
          } />
         
          
        </Route>

        </Routes>
      </BrowserRouter> 





    {/* <div>
    <Food className='main' id="food"></Food> 
    </div> */}
      
      
    </div>
  );
}

export default App;
