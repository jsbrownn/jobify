import React from 'react';
import {Link} from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src ={img} alt="not found"/>
        <h3>Ooooooops!</h3>
        <p>Sorry, but a page not found</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error