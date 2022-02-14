import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Item from "../Components/ItemListContainer/Item";


const ItemDetail = () => {
    const [item, setItem]= useState([]);

    let id = useParams();
    let itemId = id.id

    useEffect(() =>{
        axios(`https://breakingbadapi.com/api/characters/${itemId}`).then(res=> setItem(res.data))
    }, [itemId]);
    return(
        <div>ItemDetail
            {item.map((item)=>{
                return(
                    <div key={item.char_id}>
                        <Item data={item} />
                    </div>
                )
            })}
            
        </div>
    )
};

export default ItemDetail;