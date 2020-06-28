import React from "react";
import Container from "@material-ui/core/Container";
import ItemList from "./ItemList";

function ContainerDisplay() {
  return (
    <div>
      <Container maxWidth="lg">
        <ItemList />
      </Container>
    </div>
  );
}

export default ContainerDisplay;
