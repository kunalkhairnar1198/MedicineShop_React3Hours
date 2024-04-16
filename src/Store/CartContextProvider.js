import React, { useEffect, useState } from 'react'
import { CartContext } from './cart-context'
import axios from 'axios'

const CartContextProvider = (props) => {
   
    const [items, setItems] = useState([])
    const [cartItem, setCartItem] = useState([])

   const url ='https://crudcrud.com/api/299544a921a44393a3140b02a8e81621/Cart'
   const cartUrl ='https://crudcrud.com/api/299544a921a44393a3140b02a8e81621/CartItem'

   useEffect(()=>{
    const GetDataFromApi =async()=>{
     try{
      const response = await axios.get(`${url}`)
      // console.log('execute',response.data)
        const data = await response.data;
        setItems(data)

      const cartResponse = await axios.get(`${cartUrl}`)
       const Cartdata = await cartResponse.data
        setCartItem(Cartdata)

      } catch(err){
        console.log(err)
      }
    }
    GetDataFromApi()
  },[])
   

    const AddNewItem =(newitem)=>{
      setItems([...items, newitem])
    }
   
    const AddToCartHandler =async(crtItem)=>{

      const stockItemIndex = items.findIndex((item)=> item._id === crtItem._id)
      const stockItem = items[stockItemIndex]
      console.log(stockItem)

      if(stockItem.quantity === 0){
        console.log('EMPTY CART ITEM IS NOT FOUND')
        return
      }else{
        const updatedItem ={...stockItem, quantity:stockItem.quantity - 1}
        const updatedStockItems = [...items]
        console.log('updated items -1 decrease')
        updatedStockItems[stockItemIndex] = updatedItem;
        setItems(updatedStockItems)
      }

      setCartItem([...cartItem, crtItem])

      const exitingStockItemIndex = cartItem.findIndex((item)=> item._id === crtItem._id)
      const existingStockItem = cartItem[exitingStockItemIndex]

      if(existingStockItem){
        const updateStockItem ={
          ...existingStockItem,
          quantity:existingStockItem.quantity + 1
        }
        console.log('EXISTING STOCK UPDATE')
        const updateStockCart = [...cartItem]
        updateStockCart[exitingStockItemIndex] = updateStockItem;
        setCartItem(updateStockCart)
      }else{
        const updatedStockItem ={
          ...crtItem,
          quantity:1
        }
        console.log('EXISTING ELSE CONDITION')
       const updatedStockCart =[...cartItem, updatedStockItem]
       setCartItem(updatedStockCart) 
      }      
    }
 
    const RemoveCartHandler = (removeItem) => {
      const existingStockItemIndex = cartItem.findIndex(item => item._id === removeItem._id);
  
      if (existingStockItemIndex === -1) {
          console.log('Item not found in cart');
          return;
      }
  
      const existingStockItem = cartItem[existingStockItemIndex];
  
      const itemsIndex = items.findIndex(item => item._id === removeItem._id);
      if (itemsIndex !== -1) {
          const updatedItems = [...items];
          updatedItems[itemsIndex] = {
              ...updatedItems[itemsIndex],
              quantity: updatedItems[itemsIndex].quantity + 1,
          };
          setItems(updatedItems);
      }
  
      if (existingStockItem.quantity === 1) {
          const updatedCart = cartItem.filter(item => item._id !== removeItem._id);
          setCartItem(updatedCart);
      } else {
          const updatedCart = [...cartItem];
          updatedCart[existingStockItemIndex] = {
              ...existingStockItem,
              quantity: existingStockItem.quantity - 1,
          };
          setCartItem(updatedCart);
      }
      
  };
  
    
    const ContextValue ={
        item:items,
        cart:cartItem,
        AddItem: AddNewItem,
        AddToCart:AddToCartHandler,
        RemoveItem:RemoveCartHandler,
    }
    console.log(ContextValue.item)
    console.log(ContextValue.cart)
  return (
   <CartContext.Provider value={ContextValue}>
    {props.children}
   </CartContext.Provider>
  )
}

export default CartContextProvider