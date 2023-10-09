import { Button } from "react-bootstrap";

const HeaderCartButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <span>cart</span>
      <span>{props.quantity}</span>
    </Button>
  );
};

export default HeaderCartButton;
