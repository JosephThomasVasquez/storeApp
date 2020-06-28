import React from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './Item';

console.log(Grid);

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

function ContainerDisplay() {

    console.log(items[0]);
    
    return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={4}>
                <Item title={items[0].name} description={items[0].description} price={items[0].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[1].name} description={items[1].description} price={items[1].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[2].name} description={items[2].description} price={items[2].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[0].name} description={items[0].description} price={items[0].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[1].name} description={items[1].description} price={items[1].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[2].name} description={items[2].description} price={items[2].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[0].name} description={items[0].description} price={items[0].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[1].name} description={items[1].description} price={items[1].price}></Item>
            </Grid>
            <Grid item xs={4}>
                <Item title={items[2].name} description={items[2].description} price={items[2].price}></Item>
            </Grid>
            
        </Grid>
    </div>);

};

export default ContainerDisplay;