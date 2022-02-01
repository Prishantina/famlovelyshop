import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css';

const Item = ( {data} ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent className='Boxes'>
        <Typography gutterBottom variant="h5" component="div" className='text'>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {data.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Item;