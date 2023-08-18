import React from 'react'
import image from "./icons_assets/restauranfood.jpg"

function Hero() {
  return (
    <main className='hero'>
      <div className="hero-container">
        <div className="text">
            <h1>Little Lemon</h1>
            <h4>Chicargo</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque magnam exercitationem adipisci voluptate non suscipit in ipsum, possimus voluptates ex dolorem. Eligendi quam tempore architecto nostrum et eius suscipit nisi.</p>
            <button className='button'>Reserve a Table</button>
        </div>
        <img className='hero-img' src={image} alt="" />
      </div>
    </main>
  )
}

export default Hero
