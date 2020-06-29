import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Select,
} from "@material-ui/core";

function Header() {
  const [itemtype, setItemType] = useState("");
  const [openType, setOpenType] = useState(false);

  const handleChange = (event) => {
    setItemType(event.target.value);
  };

  const handleClose = () => {
    setOpenType(false);
  };

  const handleOpen = () => {
    setOpenType(true);
  };

  return (
    <div className="app-header">
      <h3 className="header-text">Store</h3>
      <div className="search-bar">
        <FormControl className="">
          <InputLabel>Item Type</InputLabel>
          <Select
            labelId="itemtype"
            className="item-type"
            open={openType}
            onClose={handleClose}
            onOpen={handleOpen}
            value={itemtype}
            onChange={handleChange}
            autoWidth={true}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Weapons"}>Weapons</MenuItem>
            <MenuItem value={"Environment Objects"}>
              Environment Objects
            </MenuItem>
            <MenuItem value={"Characters"}>Characters</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" className="nav-button">
          <span className="text-button">Search</span>
        </Button>
      </div>
    </div>
  );
}

export default Header;
