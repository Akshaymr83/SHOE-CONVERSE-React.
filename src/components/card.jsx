import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardsData from './Data';
import DownNav from './downNav';


function Cards() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const navigate = useNavigate(); // Get the navigate function

  const handleEmailButtonClick = () => {
    // Handle any logic you need before navigating
    // For now, just navigate to '/email'
    navigate('/email');
  };

  const filterCards = () => {
    let filteredData = CardsData;

    if (selectedType) {
      filteredData = filteredData.filter((card) => card.type === selectedType);
    }

    if (selectedColor) {
      filteredData = filteredData.filter((card) => card.color === selectedColor);
    }

    if (selectedCategory !== 'all') {
      filteredData = filteredData.filter((card) => card.category.toLowerCase() === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filteredData = filteredData.filter(
        (card) =>
          card.title.toLowerCase().includes(lowerCaseQuery) ||
          card.pricerange.toLowerCase().includes(lowerCaseQuery)
      );
    }

    return filteredData;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    // Additional logic if needed
    // Call the function to navigate
  };

  return  (
    <>
      <p style={{ fontWeight: '600', fontSize: '25px', marginLeft: '70px', marginTop: '100px' }}>A WORK OF ART</p>
      <div className='div2' style={{ display: "flex" }}>
        <div>
          <div style={{ height: '470px', width: '720px', background: '#4E8BB6', marginLeft: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "left" }}>
            <h1 style={{ color: 'white', font: '100px', fontWeight: '700', paddingLeft: '60px' }}>Mix It Up</h1>
            <p style={{ color: 'white', font: '40px', fontWeight: '10', paddingLeft: '60px' }}>Get your holiday rotation sewn up right with this crafted Chuck 70 with a bandana woven jacquard ollie patch.</p>
            <button type="button" className='shopnow' style={{ background: 'white', color: 'black', fontWeight: '600', height: '30px', width: '17%', border: 'none', marginLeft: '60px' }}>Shop Now</button>
          </div>

          <div><img src="2div2.webp" className='adimg' alt="" style={{ marginLeft: '70px' }} /></div>

        </div>
        <div>
          <img src="2div.webp" alt="" className='adimg' style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
      <hr />
      <div className="titleSBS">
        <h1>SHOP BY STYLE</h1>
       
      </div>
      <div className="genders" >
        <button type="button" className='filterbtn' onClick={() => handleCategoryClick('all')}>
          <h6>All</h6>
        </button>
        <button type="button" className='filterbtn' onClick={() => handleCategoryClick('women')}>
          <h6>Women</h6>
        </button>
        <button type="button" className='filterbtn' onClick={() => handleCategoryClick('men')}>
          <h6>Men</h6>
        </button>
        <button type="button" className='filterbtn' onClick={() => handleCategoryClick('kid')}>
          <h6>Kids</h6>
        </button>
        <button type="button" className='filterbtn' onClick={() => handleCategoryClick('tshirt')}>
          <h6>T-Shirts</h6>
        </button>
      </div>
      <div style={{width:'100%',marginLeft:'24%'}}>
      <FontAwesomeIcon icon={faMagnifyingGlass} beat style={{color: "#000000", height:'25px',marginRight:'10px'}}  />
      <input
          type="text"
          placeholder="Product-Name /Price range-(1000,2000,3000...)"
          className='filterSearch'
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <div className='sidenav' style={{ marginTop: '10px', marginLeft: '20px' }}>
          <h2>Filter</h2>
          <div style={{ marginTop: '30px', marginLeft: '20px' }} className='form'>
            <p style={{ fontWeight: '600' }}>Brand Collection</p>
            <form action="/action_page.php">
              <input type="radio" id="html" name="fav_language" value="HTML" onClick={() => handleTypeClick('Chuck')}/>
              <label htmlFor="html">Chuck 70</label><br />
              <input type="radio" id="css" name="fav_language" value="CSS" onClick={() => handleTypeClick('All star')} />
              <label htmlFor="css">All Star</label><br />
              <input type="radio" id="javascript" name="fav_language" value="JavaScript"onClick={() => handleTypeClick('Platform')}  />
              <label htmlFor="javascript">Platform</label><br />
            
              <br />
              <hr />

              <p style={{ fontWeight: '600' }}>Gender</p>
              <input type="radio" id="age1" name="age" value="30" onClick={() => handleCategoryClick('men')}/>
              <label htmlFor="age1">Men</label><br />
              <input type="radio" id="age2" name="age" value="60" onClick={() => handleCategoryClick('women')}/>
              <label htmlFor="age2">Women</label><br />
              <input type="radio" id="age3" name="age" value="100"onClick={() => handleCategoryClick('kid')} />
              <label htmlFor="age3">Kids</label><br /><br />
            </form>
            <hr />

          </div>
         
          <div>
            <p style={{ fontWeight: '600' }}>Colors</p>
            <Col>
              <Row>
                <div className='color' style={{ display: 'flex' }} >
                  <div className='circle'onClick={()=> handleColorClick('white')} style={{ background: 'white', border: '0.5px solid black' }}><a  href=""></a></div>
                  <div className='circle'onClick={()=> handleColorClick('black')} style={{ background: 'black' }}><a href="" ></a></div>

                  <div className='circle'onClick={()=> handleColorClick('pink')} style={{ background: 'pink' }}><a   href=""></a></div>
                  <div className='circle' onClick={()=> handleColorClick('lavender')}style={{ background: 'violet' }}><a href=""></a></div>
                  <div className='circle'onClick={()=> handleColorClick('cream')} style={{ background: '#F0E3CE' }}><a href=""></a></div>
                  
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <div className='color' style={{ display: 'flex' }} >
                  <div className='circle' onClick={()=> handleColorClick('darkgreen')} style={{ background: 'green' }}><a href=""></a></div>
                  <div className='circle'  onClick={()=> handleColorClick('yellow')}style={{ background: 'yellow' }}><a href=""></a></div>

                  <div className='circle'onClick={()=> handleColorClick('blue')} style={{ background: 'aqua' }}><a href=""></a></div>
                  <div className='circle'onClick={()=> handleColorClick('brown')} style={{ background: 'brown' }}><a href=""></a></div>
                  <div className='circle'onClick={()=> handleColorClick('bluegreen')} style={{ background: '#008080' }}><a href=""></a></div>
         
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <div className='color' style={{ display: 'flex' }} >

                  <div className='circle'onClick={()=> handleColorClick('darkblue')} style={{ background: 'rgb(19, 28, 160)' }}><a href=""></a></div>

                  <div className='circle'onClick={()=> handleColorClick('red')} style={{ background: 'red' }}><a href=""></a></div>

                </div>
              </Row>
            </Col>
          </div>
          <input
            type="submit"
            value="Apply"
            style={{
              color: 'white',
              background: 'black',
              border: 'none',
              borderRadius: '5px',
              height: '35px',
              width: '25%',
              marginTop: '20px',
              marginLeft: '20px',
            }}
          />
        </div>
        <div className='shoe'>
  <Row md={4} className="">
    {filterCards().map((card) => (
      <div key={card.id} className='items'>
        <Card style={{ width: '18rem', margin: '10px', border: 'none' }}>
          <Card.Img variant="top" src={card.image} alt={card.altText} className="shoeimg" />
          <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", position: 'absolute', top: '10px', left: '10px', zIndex: '1' }} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>Price: {card.price}</Card.Text>
            <Button variant="dark">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    ))}
  </Row>
</div>
</div>
<hr />
      <p style={{ fontWeight: '600', fontSize: '25px', marginLeft: '70px', marginTop: '100px' }}>FORM OUT COMMUNITY</p>
      <div className='div2' style={{ display: "flex" }}>
        <div>
          <img src="3div.webp" alt="" style={{ height: '100%', width: '100%', marginLeft: '70px' }} />
        </div>
        <div>
          <div style={{ height: '470px', width: '720px', background: '#DD456F', marginLeft: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "left" }}>
            <h1 style={{ color: 'white', font: '100px', fontWeight: '700', paddingLeft: '60px' }}>SHOW US YOUR STYLE</h1>
            <p style={{ color: 'white', font: '40px', fontWeight: '10', paddingLeft: '60px' }}>ude #myconvere and tag us on instagram to be featured.</p>
          </div>
          <div><img src="3div2.webp" alt="" style={{ marginLeft: '70px' }} /></div>
        </div>
      </div>
      <hr />
      <div>
        <p style={{ fontWeight: '600', fontSize: '25px', marginLeft: '70px', marginTop: '100px' }}>BEST ALL TIME DESIGNS</p>
        <img src="cshoe.jpg" alt="" style={{ marginLeft: '60px', height: '100%', width: '100%', objectFit: 'contain', }} />
      </div>
      <hr />
      <p style={{ fontWeight: '600', fontSize: '25px', marginLeft: '70px', marginTop: '100px' }}>2024 IS HERE</p>
      <div className='div2' style={{ display: "flex" }}>
        <div>
          <div style={{ height: '490px', width: '720px', background: '#015C87', marginLeft: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "left" }}>
            <h1 style={{ color: 'white', font: '100px', fontWeight: '700', paddingLeft: '60px' }}>NEW YEAR SALE IS HERE!!!!!!</h1>
            <p style={{ color: 'white', font: '40px', fontWeight: '10', paddingLeft: '60px' }}>New year, New Style</p>
            <p style={{ color: 'white', font: '40px', fontWeight: '10', paddingLeft: '60px' }}>Grab your converse now</p>
            <button type="button" className='shopnow' style={{ background: 'white', color: 'black', fontWeight: '600', height: '40px', width: '17%', border: 'none', marginLeft: '300px', borderRadius: '5px' }}>Buy Now</button>
          </div>
        </div>
        <div>
          <img src="hightop2.avif" alt="" style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
      <hr />
      <div className='div2' style={{ display: "flex", marginLeft: '70px', marginTop: '190px', marginBottom: '50px' }}>
        <div>
          <div style={{ height: '490px', width: '720px', background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "left" }}>
            <h1 style={{ color: 'white', fontSize: '90px', fontWeight: '800', paddingLeft: '60px' }}>NEVER MISS A BEAT</h1>
            <p style={{ color: 'white', fontSize: '15px', fontWeight: '10', paddingLeft: '60px' }}>Be the first to hear about exclusive sales, product drops, <br /> new collabs, and more—sent straight to your inbox.</p>
            <Link to="/email">  <button type="button" className='shopnow' onClick={handleEmailButtonClick} style={{ background: 'white', color: 'black', fontWeight: '600', height: '40px', width: '25%', border: 'none', marginLeft: '60px', borderRadius: '5px' }}>Sign Up for Emails</button></Link>
          </div>
        </div>
        <div style={{ background: 'black', height: '490px', width: '720px' }}>
          <img src="logo.jpg" className='logoconverse' alt="" style={{ height: '350px', width: '500px', marginTop: '70px', marginLeft: '70px' }} />
        </div>
      </div>

      <DownNav />
    </>
  );
}

export default Cards;
