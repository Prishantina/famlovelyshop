import React, { useState } from "react";


const ItemCount = (props) => {
    const [counter, setCounter] = useState(props.initial);
    const stock = props.stock;

    const handlerCounterUp = () => {
        if (counter <= stock) {
            setCounter(counter + 1);
        }else{
        alert('No hay Stock de este producto');
    };
    };
    const handlerCounterDown = () => {
        if (counter >= 1){
            setCounter(counter -1);
        };
    };
    return (
        <div>      
            <h3>Tu carrito</h3>
            <p>{counter}</p>

            <button onClick={handlerCounterUp}>+ Agregar</button>
           
            <button onClick={handlerCounterDown}>- Quitar</button>
        </div>
  

    )
}; 
export default ItemCount;