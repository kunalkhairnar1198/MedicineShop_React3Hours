import React, { useContext } from 'react';
import { Button,  Navbar } from 'react-bootstrap';
import { CartContext } from '../../Store/cart-context';

const Header = (props) => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.length;

   

    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <h2>MedicineShop</h2>

            <Button onClick={props.onToggleCart}>
                <span>Cart {totalItems}</span>
            </Button>
        </Navbar>
    );
};

export default Header;
