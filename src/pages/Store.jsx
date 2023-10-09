import React, { useState, useEffect } from "react";
import Products from "../components/Products/Products";
import HeaderCartButton from "../components/HeaderCartButton";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../store/item";
import Cart from "../components/Cart";
import { Navbar, Container } from "react-bootstrap";
import axios from "axios";

const Store = () => {
  const emailid = localStorage.getItem("email");
  const newemailid = emailid.replace("@", "");
  const useremailid = newemailid.replace(".", "");

  const [cartIsShown, setCartIsShown] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  console.log(items);

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/5508a1dcc0ea4ce3b14bd3981c5aa9f5/cart${useremailid}`
      )
      .then((response) => {
        dispatch(itemActions.updateItem(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showCartHandler = (event) => {
    setCartIsShown(true);
  };

  const hideCartHandler = (event) => {
    setCartIsShown(false);
  };

  let quantity = 0;

  items.forEach((item) => {
    quantity += Number(item.quantity);
  });

  return (
    <>
      <Container>
        <Navbar>
          <HeaderCartButton onClick={showCartHandler} quantity={quantity} />
        </Navbar>
        {cartIsShown && <Cart onBack={hideCartHandler} />}
        <Products />
      </Container>
    </>
  );
};

export default Store;
