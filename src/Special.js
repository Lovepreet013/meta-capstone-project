import React from 'react'
import Cards from "./Cards"

function Special() {
  return (
    <main className='special'>
      <div className="special-text">
        <h1>This week specials!</h1>
        <button className='button sButton'>Online Menu</button>
      </div>
      <div className="special-menu">
        <Cards/>
      </div>
    </main>
  )
}

export default Special
