import React from 'react'

import Navigation from './Navigation bar'
import Filter from './filter'
import Cards from './card'


function Frontpage() {
  return (
    <>
    <Navigation/>
       <div className='front'>
            <img src="Converse_Homepage_Jan-02_1.webp" alt="" style={{marginLeft:'41px'}} />
            <img src="UPDATE_13-06.webp" alt="" style={{marginRight:'30px'}}/>
        </div>
        <hr />
      <Cards/>
    </>
  )
}

export default Frontpage