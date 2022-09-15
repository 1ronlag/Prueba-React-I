import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
import Heinsenberg from '../Assets/heinsenberg.png';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='text-white py-4 bg-dark'>
        <div className='containerfooter'>
          <nav className='row text-center'>
            <NavLink className='col-12 col-md3 d-flex align-items-center justify-content-center ' href='https://es.wikipedia.org/wiki/Breaking_Bad' target="_blank">
              <img src={Heinsenberg} className='mx-2' width='150px' />
            </NavLink>
            <div className='d-flex justify-content-center'>
              <ul className='col-12 col-md-3 list-unstyled text-center' >
                <li className='font-weight-bold mb-2' > Braeking Bad</li>
                <li className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae nemo est </li>
              </ul>


              <ul className='col-12 col-md-3 list-unstyled text-center'>
                <li className='font-weight-bold mb-2' > Braeking Bad</li>
                <li className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae nemo est </li>
              </ul>


              <ul className='col-12 col-md-3 list-unstyled text-center'>
                <li className='font-weight-bold mb-2' > Follow Us</li>
                <li className='d-flex justify-content-between'> 
              <h1><BsFacebook/></h1> 
              <h1><BsInstagram/></h1>
              <h1><BsTwitch/></h1>
              <h1><BsTwitter/></h1>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
      </>
  )
}

export default Footer