import React from "react";
import Card from '@material-ui/core/Card'

const items = [
    {
        id: 'wp001',
        name: 'Assault Rifle',
        model: 'AK47_20K_HP.FBX',
        description: 'This is a 3D Model of an AK-47.',
        poly: '20K',
        rigged: true,
        price: 24.99
    },
    {
        id: 'kt001',
        name: 'Kitchen Utensils',
        model: 'Kitchen_Utensils_5K_LP.FBX',
        description: '3D Model of a spoon, fork, knife, glass, mug, bowl, & plate',
        poly: '5K',
        rigged: false,
        price: 2.99
    },
    {
        id: 'fn001',
        name: 'Leather Sofa',
        model: 'Leather_Sofa_12K_HP.FBX',
        description: 'This is a 3D Model of a Leather Sofa.',
        poly: '12K',
        rigged: false,
        price: 13.99
    },
];

function Item (props) {
    return (
    <div>
        <Card>
        <img className="item-img-card" src=""></img>
        <p className="item-title-card">{items[1].name}</p>
        <p className="item-description-card">{items[1].description}</p>
        <p className="item-price-card">{items[1].price}</p>
        </Card>
    </div>
    );
}

export default Item;