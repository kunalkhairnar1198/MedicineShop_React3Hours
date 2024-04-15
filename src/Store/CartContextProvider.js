import React, { useState } from 'react'
import { CartContext } from './cart-context'

const CartContextProvider = (props) => {
    const [openCart, setOpenCart] = useState(false)
    const [items, setItems] = useState([])
    const showCart =()=>{
        setOpenCart(true)
    }
    const hideCart =()=>{
        setOpenCart(false)
    }
    const AddNewItem =(item)=>{
      setItems(prevItem => [...prevItem, item])
    }
    
    const ContextValue ={
        item:items,
        cart:[],
        AddItem: AddNewItem,
        RemoveItem:()=>{},
        cartHandler:openCart,
        showCart:showCart,
        hideCart:hideCart,

    }
    console.log(ContextValue.item)
  return (
   <CartContext.Provider value={ContextValue}>
    {props.children}
   </CartContext.Provider>
  )
}

export default CartContextProvider
