import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia, CardContent, Typography, Button, CardActionArea } from "@material-ui/core";

function Item(props) {

  return (
    <div className="item-card">
      <Card>
      <CardActionArea>
          <CardMedia>
            <img className="item-img-card" src={`../../images/${props.image}`} alt="3D model"></img>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <p className="item-title-card">{props.title}</p>
              <p className="item-description-card">{props.description}</p>
              <p className="item-price-card">{props.price}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}

export default Item;
