import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Item from "../Components/ItemListContainer/Item";
import ItemCount from "../Components/ItemListContainer/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = () => {
    const [item, setItem]= useState([]);

    const [myState, setMyState] = useState (false);

    const onAdd = () => {
          setMyState(!myState)
    };

    let id = useParams();
    let itemId = id.id

    useEffect(() =>{
        axios(`https://breakingbadapi.com/api/characters/${itemId}`).then(res=> setItem(res.data))
    }, [itemId]);
    return(
    
            <div>
                 {item.map((item)=>{
                    return(
                        <div key={item.char_id}>
                             <Item data={item} />
                             
                             {myState ? <Link to='/Cart'>Finalizar Compra</Link> : <ItemCount stock={item.stock} initial="1"/> }

                             <button onClick={onAdd}>Comprar</button>

                             
                        </div>
                )
            })}
    
            </div>
           
        
      
    )
};

export default ItemDetail;