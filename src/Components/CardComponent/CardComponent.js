import React from "react";
import './CardComponent.css';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';


const CardComponent = (props) => {
    return (
<div>
  <Card className="Products">
    <CardBody style={{ border: `10px solid ${props.color}` }}>
      <CardTitle tag="h5">Producto x</CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <Button>
        +Agregar al carrito
      </Button>
    </CardBody>
  </Card>
</div>
    )
};
 export default CardComponent
