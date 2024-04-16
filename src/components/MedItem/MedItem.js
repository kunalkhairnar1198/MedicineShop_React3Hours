import React, { useContext } from 'react'
import {ListGroup, Button, Card } from 'react-bootstrap'
import { CartContext } from '../../Store/cart-context'
import axios from 'axios'

const MedItem = () => {
    const ctxItem = useContext(CartContext)


    const dataPostFetch =async(items)=>{
      const obj ={
        name: items.name,
        description: items.description,
        price : items.price,
        quantity : items.quantity
      }
    try{
      const response = await axios.post(`https://crudcrud.com/api/299544a921a44393a3140b02a8e81621/CartItem`,obj)
      const data =await response.data
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }


    const AddToCarthandler =(items)=>{
      ctxItem.AddToCart(items)
      console.log(items)
      dataPostFetch(items)
    }
    // console.log(ctxItem.item)
    
    const listOfItems = ctxItem.item.map((item) => (
      <ListGroup.Item key={item._id} className="d-flex justify-content-between align-items-center">
          <div className="flex-grow-1">
              <span className="me-3">{item.name}</span>
              <span className="me-3">{item.description}</span>
              <span className="me-3 ">${item.price}</span>
              <span className="me-3 ">{item.quantity}</span>
          </div>
          <Button
              variant="primary"
              size="sm"
              onClick={() => AddToCarthandler(item)}
          >
              Add To Cart
          </Button>
      </ListGroup.Item>
  ));


  return (
    <Card>
      <Card.Body>
        <Card.Title>Items</Card.Title>
        <ListGroup>
          {listOfItems}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default MedItem
