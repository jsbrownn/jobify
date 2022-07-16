import React,{useEffect} from 'react';
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
import main from './../assets/images/main-alternative.svg';
import Logo from './../components/Logo';

const Landing = () => {
  
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>I'm baby bespoke taiyaki pour-over +1 cray raclette everyday carry kale chips pork belly literally shabby chic distillery chia. Migas post-ironic plaid cornhole freegan church-key. Tilde pickled artisan, unicorn fashion axe pitchfork shabby chic hashtag gentrify vice pop-up. Adaptogen vegan marfa leggings hammock four dollar toast you probably haven't heard of them authentic unicorn ugh raclette chicharrones. Leggings taxidermy locavore yuccie truffaut pitchfork. Tattooed actually forage hell of, vape VHS church-key thundercats lumbersexual migas bushwick paleo.</p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="main" className="img main-img"/>
      </div>
  </Wrapper>
  )
};      



export default Landing