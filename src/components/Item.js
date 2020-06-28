import React from "react";
import Card from '@material-ui/core/Card'



function Item (props) {
    //console.log(props.name);
    return (
    <div>
        <Card>
        <img className="item-img-card" src=""></img>
        <p className="item-title-card">{props.title}</p>
        <p className="item-description-card">{props.description}</p>
        <p className="item-price-card">{props.price}</p>
        </Card>
    </div>
    );
}

export default Item;