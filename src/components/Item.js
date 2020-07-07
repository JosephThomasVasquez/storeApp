import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActionArea,
} from "@material-ui/core";

function Item(props) {

  const setLength = props.description.substring(0, 48) + '...';

  return (
    <div className="item-card">
      <Card>
        <CardActionArea>
          <CardMedia>
            <img
              component="img"
              className="item-img-card"
              src={`../../images/${props.image}`}
              alt={`Image of a${props.title}`}
            ></img>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {setLength}
            </Typography>
            <Typography variant="body1" component="div">
             <div className="item-price-card">{props.price}</div> 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Item;
