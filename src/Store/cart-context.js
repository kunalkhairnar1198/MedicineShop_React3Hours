import React from "react";

export const CartContext = React.createContext({
    item:[],
    cart:[],
    AddItem:()=>{},
    AddToCart:()=>{},
    RemoveItem:()=>{},
})