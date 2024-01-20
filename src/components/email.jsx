import React from 'react';
import Navigation from './Navigation bar';
import DownNav from './downNav';

function Emailbutton() {
  return (
    <>
      <Navigation />
      <div className='mainbox'>
         
      <div className="signup-box">
      <h2 style={{fontWeight:'600'}}>Create an Account</h2>
      <form>
        <div className="form-group">
       
          <input type="text" id="name" name="name" required  placeholder='Enter your name'/>
        </div>

        <div className="form-group">
         
          <input type="number" id="age" name="age" required placeholder='Enter your Age' />
        </div>

        <div className="form-group">
          
          <input type="email" id="email" name="email" required  placeholder='Enter your email'/>
        </div>

        <div className="form-group">
          
          <input type="password" id="password" name="password" required placeholder='password' />
        </div>

        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>

</div>
       <div className='downbar'>
       <hr />
       <DownNav  />
       </div>

        
     
    </>
  );
}

export default Emailbutton;
