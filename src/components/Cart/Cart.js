import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import { CartContext } from '../../Store/cart-context';
import ModalCompo from '../UI/ModalCompo';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    console.log(cartContext);

    const totalAmount = cartContext.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const formattedTotalAmount = totalAmount.toFixed(2);


   const increaseQuantity =(item)=>{
        cartContext.AddToCart(item)
   }

   const decreaseQuantity =(item)=>{
        cartContext.RemoveItem(item)
   }

    const cartItems = cartContext.cart.map((item,index) => (
      <tr key={index}>
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td className={classes.inputbox} >
              <Button variant='secondary' className='mr-5' onClick={() => decreaseQuantity(item)}>-</Button>
             <span>{item.quantity}</span>
              <Button variant='secondary' onClick={() => increaseQuantity(item)}>+</Button>
          </td>
      </tr>
    ));

    return (
      <ModalCompo onCloseHandle={props.onClose}>
      <Container className='z-1 position-fixed' style={{ right: '-22%', top: '2rem', height: '100rem' }}>
      <div className=" modal show" style={{ display: 'block', position: 'relative' }}>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={props.onClose}>
            <Modal.Title>Cart List</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: 'calc(95vh - 300px)', overflowY: 'auto' }}>
            <Table responsive='md' className='table'>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems}
                <tr>
                  <td className='text-end' colSpan={2}>
                    <h5>TotalAmount</h5>
                  </td>
                  <td>${formattedTotalAmount}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">MakeABill</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </Container>
    </ModalCompo>
    );
};

export default Cart;
    // Create table rows for each cart item
