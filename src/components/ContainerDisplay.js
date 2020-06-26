import React from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './Item';

console.log(Grid);

function ContainerDisplay() {
    
    return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>Product</Item>
            </Grid>
        </Grid>
    </div>);

};

export default ContainerDisplay;