import React from "react";
import { Card } from "react-bootstrap";
import classes from "./CardUI.module.css";

function CardUI() {
  return (
    <>
      <Card
        className={classes.card}
        bg={"secondary"}
        key={"secondary"}
        text={"white"}
      >
        <Card.Body>
          <Card.Title>
            <h1>Prakhar Online Store</h1>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardUI;
