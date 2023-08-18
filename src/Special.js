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
        <Cards title="Greek Salad" img={require("./icons_assets/greek salad.jpg")} price={"12.00"}/>
        <Cards title="Bruchetta" img={require("./icons_assets/lemon dessert.jpg")} price={"15.36"}/>
        <Cards title="Lemon Desert" img={require("./icons_assets/lemon dessert.jpg")} price={"20.89"}/>
      </div>
    </main>
  )
}

export default Special
