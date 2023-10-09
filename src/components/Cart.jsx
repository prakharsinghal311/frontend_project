import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../store/item";
import axios from "axios";
import {
  Button,
  Card,
  CardGroup,
  CloseButton,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

const Cart = (props) => {
  const emailid = localStorage.getItem("email");
  const newemailid = emailid.replace("@", "");
  const useremailid = newemailid.replace(".", "");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  const removeItemInCart = (id) => {
    let flag = 0;
    const productToBeDeleteIndex = items.findIndex((i) => i.id === id);
    const userData_id = items[productToBeDeleteIndex]._id;

    if (items[productToBeDeleteIndex].quantity === 1) {
      flag = 1;
    }

    dispatch(itemActions.removeItem(id));

    if (flag === 1) {
      axios
        .delete(
          `https://crudcrud.com/api/5508a1dcc0ea4ce3b14bd3981c5aa9f5/cart${useremailid}/${userData_id}`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://crudcrud.com/api/5508a1dcc0ea4ce3b14bd3981c5aa9f5/cart${useremailid}`
        )
        .then((response) => {
          response.data[productToBeDeleteIndex].quantity =
            parseInt(response.data[productToBeDeleteIndex].quantity) - 1;
          delete response.data[productToBeDeleteIndex]._id;

          axios
            .put(
              `https://crudcrud.com/api/5508a1dcc0ea4ce3b14bd3981c5aa9f5/cart${useremailid}/${userData_id}`,
              response.data[productToBeDeleteIndex]
            )
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Card>
      <CardGroup>
        <Container size="sm">
          <Row>
            <Col>Cart</Col>
            <Col>
              <CloseButton onClick={props.onBack} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 &&
                    items.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <img src={item.imageUrl} alt="" />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            {item.quantity}
                            <Button
                              onClick={removeItemInCart.bind(null, item.id)}
                            >
                              remove
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </CardGroup>
    </Card>
  );
};

export default Cart;
