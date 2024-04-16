import {  useState } from "react";
import Header from "./components/Header/Header";
import MedItem from "./components/MedItem/MedItem";
import MedForm from "./components/MedItem/Medform/MedForm";
import Cart from "./components/Cart/Cart";

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleCart = () => {
    setIsOpenCart((prevIsOpenCart) => !prevIsOpenCart);
  };
  const closeToggleCart =()=>{
    setIsOpenCart(false)
  }

  return (
    <>
      <Header onToggleCart = {toggleCart}/>
       {isOpenCart && <Cart onClose={closeToggleCart}/>}
      <MedForm/>
      <MedItem/>
    </>
  );
}

export default App;
