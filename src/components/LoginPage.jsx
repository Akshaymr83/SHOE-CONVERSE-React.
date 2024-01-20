// import React from 'react';
// import './Login.css'
// import { Link } from 'react-router-dom';
// import Navigation from './Navigation bar';


// function LoginForm() {
//   return (
//     <div>
//       <div>
//         <Navigation/>
//       </div>
//     <div className="center">
//       <input type="checkbox" id="show" />
//       <label htmlFor="show" className="show-btn">
//         Login Now
//       </label>
//       <div className="container">
//         <label htmlFor="show" className="close-btn fas fa-times" title="close"></label>
//         <div className="text">Login Now</div>
//         <form action="#">
//           <div className="data">
//             <input type="text" placeholder="Your Email or Phone" required />
//           </div>
//           <div className="data">
//             <input type="password" placeholder="Your Password" required />
//           </div>
//           <div className="forgot-pass">
//             <a href="#">Forgot Password?</a>
//           </div>
//           <div className="btn">
//         <div className="inner"></div>
        
//           <button type="submit" style={{ width: '180px', marginLeft: '30px' }} className='LoginBtn'>
//             Login
//           </button>
     
//       </div>
//           <div className="signup-link">
//             Not a member? <a href="#">Signup now</a>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default LoginForm;
//  /////////////////////////////////////////////////////////////////////////

import React from 'react';

import Navigation from './Navigation bar';
import './Login.css';
import DownNav from './downNav';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    
    navigate('/frontpage')
  };

  return (
    <div>
      <div>
        <Navigation />
      </div >
      <div className='cvbackground'>
       
  
      <div className="title">
        <h1>IF THE  <br /> SHOE <br />FITS, <br />BUY IT. </h1>
       
    </div>
    
    
      <div className="center">
        <input type="checkbox" id="show" />
        <label htmlFor="show" className="show-btn" style={{marginTop:'40px',borderRadius:'10px'}} id='text'>
          Login Now
        </label> 
        
        <div className="container" style={{marginTop:'60px',width:'23%'}}>
          <label htmlFor="show" className="close-btn fas fa-times" title="close" style={{color:'black'}}></label>
          <div className="text" >Login Now</div>
        
          <form action="#">
          <div className="data">
               <input type="text" placeholder="Your Email or Phone" required />
             </div>
           <div className="data">
            <input type="password" placeholder="Your Password" required />
            </div>
          <div className="forgot-pass">
           <a href="#">Forgot Password?</a>
           </div>
            <div className="btn" style={{border:'none',outline:'none'}}>
              
              <button
                type="button"
                onClick={handleLoginClick}
                style={{ width: '180px', marginLeft: '50px',border:'none',outline:'none' }}
                className="LoginBtn"
              >
                Login
              </button>
            </div>
            <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div>
          </form>
        </div>
      
      </div>

    </div>

    <div>
    <hr />
      <DownNav/></div>
    </div>
    
    
  );
}

export default LoginForm;
