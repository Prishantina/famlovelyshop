import React, { useState, useEffect } from "react";
import Item from "./Item";
import './ItemList2.css'

const ItemList2 = () => {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>setItems(json))
  }, []);

  return ( 
          <div className="ItemList2">
            {items.map((item)=> {
              return(
                <div className="Box" key={item.id}>
                  <Item data={item}/>   
                </div>
              )
            })}
                
                  
          </div>
      );
};

export default ItemList2;