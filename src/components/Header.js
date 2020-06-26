import React from 'react';
import { Button } from '@material-ui/core';


function Header() {

    return (
        
        <div>
            <h3>Store</h3>
            <Button variant="contained" color="primary" className="nav-button"><span className="text-button">Store</span></Button>
        </div>
    );

};

export default Header;
