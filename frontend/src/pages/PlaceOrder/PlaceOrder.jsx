import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
   <form action="" className="place-order">
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder="Enter First Name" />
        <input type="text" placeholder='Enter Last Name' />
      </div>
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='street'/>
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip Code' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='Phone' />
    </div>
    <div className="place-order-right">
       <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:2}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button >Proceed To Payment</button>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder