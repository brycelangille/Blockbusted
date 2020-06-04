import React from 'react'
import "./Header.css";
import SearchPage from "../Search/SearchPage.jsx";
import logo from "../BlockBusted_logo.png"

export default function () {
  return (
    <div className="header">
      <div className='logoThing'>
        <img className="logo"src={logo} alt='logo' />
      </div>
      {/* <h1 className='titlePage'>BLOCKBUSTED</h1> */}
      <SearchPage />
    </div>
  )
}