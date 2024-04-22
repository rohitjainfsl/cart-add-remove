/* eslint-disable react/prop-types */
import React from 'react'

function CartItem({cartItem}) {
  return (
    <div className='cartItem'>
        <p>{cartItem.name}</p>
    </div>
  )
}

export default CartItem