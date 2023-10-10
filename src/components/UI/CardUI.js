import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import classes from "./CardUI.module.css";

function CardUI() {
  const [name, setName] = useState();
  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

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
            <h2>hi {name}</h2>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardUI;
