import React, { useState, useEffect } from "react";
import Item from './Item';
import './ItemList2.css'
import axios from 'axios';
import { Link } from "react-router-dom";

const ItemList2 = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() =>{
      axios('https://breakingbadapi.com/api/characters').then((res) => setItems(res.data)
      );
    }, []);
  
    return ( 
            <div className="ItemList2">
              {items.map((item)=> {
                return(
                  <div>
                  <Link className="Box" key={item.id} to={`/detail/${item.char_id}`}>
                  <Item data={item}/>   
                  </Link>
                  </div>
                 
                )
              })}
                  
                    
            </div>
        );
  };
  
  export default ItemList2;
  