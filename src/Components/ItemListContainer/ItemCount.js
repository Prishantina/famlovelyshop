import React, { useState } from "react";

let stock = 8;

const ItemCount = () => {
    const [counter, setCounter] = useState(0);
    const handlerCounterUp = () => {
        if (counter == stock) {
            counter = stock
        }else{
        setCounter(counter +1);
    };
    };
    const handlerCounterDown = () => {
        if (counter <= 0){
            counter = 0
        }else{
        setCounter(counter -1);
    };
    };
    return (
        <div>      
            <h3>Tu carrito de compras</h3>
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>+ Agregar al carrito</button>
            <button onClick={handlerCounterDown}>- Eliminar producto</button>
        </div>
  

    )
};
export default ItemCount;