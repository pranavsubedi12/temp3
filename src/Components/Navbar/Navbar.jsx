import React from 'react'
import'./Navbar.css'
import search_icon_light from '../../assets/search-w.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='' alt='' className='logo' />
        <ul>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#Report'>Report a Scam</a></li>
            <li> <a href='#Help'>Help & Info </a></li>
            <li><a href='#About us'>About us</a></li>
        </ul>

        <div className='search-box'>
          <input type='text' placeholder='Search'/>

        </div>
        
            <button type='submit' className='form'>Login/Signup</button>
       
        
      
    </div>
    
  );
}

export default Navbar
