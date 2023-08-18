import React from 'react'

function Cards({title,img,price, description}) {
  return (
    <div className='cards'>
      <div className="card">
        <img className='card-img' src={img} alt="" />
        <div className="card-text">
            <div className="upper">
                <h1>{title}</h1>
                <p>${price}</p>
            </div>
            <p className='item-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit similique reiciendis nulla voluptas atque omnis necessitatibus voluptate laudantium ratione!</p>
            <p className='order-del'>Order delivery</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
