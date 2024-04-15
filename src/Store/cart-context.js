import React from "react";

export const CartContext = React.createContext({
    item:[],
    cart:[],
    AddItem:()=>{},
    RemoveItem:()=>{},
    cartHandler:true,
    openCart:()=>{},
    hideCart:()=>{},
})