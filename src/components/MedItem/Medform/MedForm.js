import React, { useContext, useRef } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from '../../../Store/cart-context';

const MedForm = () => {
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const priceRef = useRef(null);
    const quantRef = useRef(null);
    const cartCtxt = useContext(CartContext)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const description = descRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantRef.current.value;

        const enterObj = {
            name,
            description,
            price: parseFloat(price),
            quantity: parseInt(quantity, 10),
            // _id : Math.random().toString()
        };
        console.log(enterObj);
            // Api call when add item
            try{
                const response = await axios.post(`https://crudcrud.com/api/299544a921a44393a3140b02a8e81621/Cart`,
                    enterObj,
                )
                const addedItem = response.data
                console.log('ITEM ADDED SUCCESFULLY',response.data)
                cartCtxt.AddItem(addedItem)

                nameRef.current.value = '';
                descRef.current.value = '';
                priceRef.current.value = '';
                quantRef.current.value = '';
        
            } catch(err){
                console.log(err)
            }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Add Item</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Enter name" ref={nameRef} />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputDescription">Description</label>
                            <input type="text" className="form-control" id="inputDescription" placeholder="Enter description" ref={descRef} />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPrice">Price</label>
                            <input type="number" className="form-control" id="inputPrice" placeholder="Enter price" ref={priceRef} />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputQuantity">Quantity</label>
                            <input type="number" className="form-control" id="inputQuantity" placeholder="Enter quantity" ref={quantRef} />
                        </div>
                        <div className="form-group">
                            <Button type="submit" variant="primary">Add Item</Button>
                        </div>    
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default MedForm;
