import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'; 

function DownNav() {
  const navigate = useNavigate(); 

  const handleEmailButtonClick = () => {
   
    navigate('/email');
  };

  return  (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

        {/* Section 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
          <div style={{ width: '200px' }}><FontAwesomeIcon icon={faUserPlus} style={{ height: '40px', marginLeft: '36%', marginBottom: '20px' }} /></div>
          <div><p style={{ fontSize: '15px', textAlign: 'center' }}>Sign up for Converse.in account and <br />get free shipping on every order</p></div>
          <div className='learn' style={{ fontSize: '15px', textAlign: 'center' }}><a href="">Learn More</a></div>
        </div>

        {/* Section 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
          <div style={{ width: '200px' }}><FontAwesomeIcon icon={faTruckFast} style={{ color: "#000000", height: '40px', marginLeft: '34%', marginBottom: '20px' }} /></div>
          <div><p style={{ fontSize: '15px', textAlign: 'center' }}>Not happy? Return or exchange <br />your purchase for free within 7 days.</p></div>
          <div className='learn' style={{ fontSize: '15px', textAlign: 'center' }}><a href="">Learn More</a></div>
        </div>

        {/* Section 3 */}
        <div>
          <div style={{ display: 'flex', marginLeft: '62px' }} >
            <div><FontAwesomeIcon icon={faInstagram} style={{ color: "#000000", marginLeft: '15px', height: '25px' }} /></div>
            <div><FontAwesomeIcon icon={faFacebook} style={{ color: "#000000", marginLeft: '15px', height: '25px' }} /></div>
            <div><FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", marginLeft: '15px', height: '25px' }} /></div>
          </div>
          <div><p style={{ fontSize: '15px', textAlign: 'center' }}>Follow Us On</p></div>
          <div><p style={{ fontSize: '15px', textAlign: 'center' }}>Keep up with the latest updates  <br />of Converse news on our social media</p></div>
          <div className='learn' style={{ fontSize: '15px', textAlign: 'center' }}><a href="" style={{ fontSize: '15px', textAlign: 'center' }}>Learn More</a></div>
        </div>
      </div>
      <hr />

      {/* Section 4 */}
      <div style={{ marginLeft: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'baseline' }}>
        <div style={{ marginLeft: '30px' }}>
          <p style={{ fontWeight: '700', fontSize: '15px' }}>Never Miss a Beat</p>
          <p style={{ fontSize: '15px' }}>Be the first to hear about product launches,<br /> collaborations, and more when you <br />  sign up for our emails.</p>
          <Form style={{ display: "flex", marginTop: '-30px' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ background: "balck", color: 'red', height: "50px", width: '300px', marginTop: '60px', border: '1px solid black' }}
            />
         
            <Link to="/email">
        <button
          className='emailbutton'
          onClick={handleEmailButtonClick}
          style={{ marginTop: '60px', height: "50px", background: 'black', color: 'white', marginLeft: '4px', border: 'none', borderRadius: '5px', width: '129%', fontSize: '15px' }}>
          Sign up
        </button>
      </Link>
          </Form>
        </div>

        {/* Section 5 */}
        <div>
          <h6 style={{ fontWeight: '600' }} >Follow us:</h6>
          <div style={{ display: 'flex' }}>
            <div style={{ border: '1px solid black', height: '50px', width: '50px', borderRadius: '5px' }}><FontAwesomeIcon icon={faInstagram} style={{ color: "#000000", height: "25px", padding: '10px 13px 10px' }} /></div>
            <div style={{ border: '1px solid black', height: '50px', width: '50px', borderRadius: '5px' }}><FontAwesomeIcon icon={faFacebook} style={{ color: "#000000", height: "25px", padding: '10px 13px 10px' }} /></div>
            <div style={{ border: '1px solid black', height: '50px', width: '50px', borderRadius: '5px' }}><FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", height: "25px", padding: '10px 13px 10px' }} /></div>
          </div>
        </div>

        {/* Section 6 */}
        <div>
          <h6 style={{ fontWeight: '600' }}>Get Help</h6>
          <ul >
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>FAQ</a></li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>Shipping & Delivery</a></li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>Payment</a></li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>Size Guide</a></li>
          </ul>
        </div>

        {/* Section 7 */}
        <div>
          <ul>
            <li style={{ listStyleType: 'none' }}> </li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>Order Status</a></li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>Return and Refund</a></li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>Contact us</a></li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>Student Discount</a></li>
            <li style={{ fontSize: '13px', textDecoration: 'none', listStyleType: 'none' }}><a href="" style={{ textDecoration: 'none', color: 'grey' }}>24x7 Customer care</a></li>
          </ul>
        </div>
      </div>

      {/* Section 8 */}
      <div className='downbox'>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>
          <li style={{ listStyleType: 'none', display: 'block', color: 'grey', fontSize: '12px', marginLeft: '30px', marginTop: '20px' }}>Terms & conditions</li>
          <li style={{ listStyleType: 'none', display: 'block', color: 'grey', fontSize: '12px', marginLeft: '30px', marginTop: '20px' }}>Privacy & Policy</li>
          <li style={{ listStyleType: 'none', display: 'block', color: 'white', fontSize: '13px', marginLeft: '1000px', marginTop: '20px' }}>Copyright {'\u00A9'} 2024 Converse</li>
        </ul>
      </div>
    </>
  );
}

export default DownNav;
