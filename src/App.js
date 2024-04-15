import { useContext } from "react";
import Header from "./components/Header/Header";
import MedItem from "./components/MedItem/MedItem";
import MedForm from "./components/MedItem/Medform/MedForm";
import { CartContext } from "./Store/cart-context";

function App() {
  const cartCtx = useContext(CartContext)


  return (
    <>
      <Header/>
      <MedForm/>
      <MedItem/>
    </>
  );
}

export default App;
