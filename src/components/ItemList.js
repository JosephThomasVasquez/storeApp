import React from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const items = [
    {
        id: 'wp001',
        name: 'Assault Rifle',
        model: 'AK47_20K_HP.FBX',
        description: 'This is a 3D Model of an AK-47.',
        img: 'akm-ak-47-ak-74-01.jpg',
        poly: '20K',
        rigged: true,
        price: 24.99
    },
    {
        id: 'kt001',
        name: 'Kitchen Utensils',
        model: 'Kitchen_Utensils_5K_LP.FBX',
        description: '3D Model of a spoon, fork, knife, glass, mug, bowl, & plate',
        img: 'w3ixvwkx-900.jpg',
        poly: '5K',
        rigged: false,
        price: 2.99
    },
    {
        id: 'fn001',
        name: 'Leather Sofa',
        model: 'Leather_Sofa_12K_HP.FBX',
        description: 'This is a 3D Model of a Leather Sofa.',
        img: 'savoy-leather-sofas.jpg',
        poly: '12K',
        rigged: false,
        price: 13.99
    },
];

function ItemList(props) {

    console.log(props.id);

    let showItemsPerView = 3;

    let numberOfItems = [];
    
    for (let i = 0; i < showItemsPerView; i++ ) {

        numberOfItems.push(
        <Grid item xs={6} sm={4} md={3}>
            <Item key={uuidv4()} image={items[0].img} title={items[0].name} description={items[0].description} price={items[0].price}></Item>
        </Grid>);
        numberOfItems.push(
        <Grid item xs={6} sm={4} md={3}>
            <Item key={uuidv4()} image={items[1].img} title={items[1].name} description={items[1].description} price={items[1].price}></Item>
        </Grid>);
        numberOfItems.push(
        <Grid item xs={6} sm={4} md={3}>
            <Item key={uuidv4()} image={items[2].img} title={items[2].name} description={items[2].description} price={items[2].price}></Item>
        </Grid>);
    };

    return (
    <div>
        <Grid container justify="center" spacing={4}>
            {numberOfItems}
        </Grid>
    </div>);

};

export default ItemList;