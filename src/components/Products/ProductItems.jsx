import { useDispatch } from "react-redux";
import { itemActions } from "../../store/item";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductItems = (props) => {
  const emailid = localStorage.getItem("email");

  const newemailid = emailid.replace("@", "");

  const useremailid = newemailid.replace(".", "");

  const dispatch = useDispatch();

  const addItemToCart = (event) => {
    event.preventDefault();
    dispatch(itemActions.addItem({ ...props, quantity: 1 }));
    const userData = {
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      productId: props.productId,
      quantity: 1,
    };

    let existingProductIdIndex;
    let userData_id;

    axios
      .get(
        `https://crudcrud.com/api/5508a1dcc0ea4ce3b14bd3981c5aa9f5/cart${useremailid}`
      )
      .then((response) => {
        console.log(response.data);

        existingProductIdIndex = response.data.findIndex(
          (i) => i.productId === userData.productId
        );

        if (existingProductIdIndex === -1) {
          axios
            .post(
              `https://crudcrud.com/api/5508a1dcc0ea4ce3b14bd3981c5aa9f5/cart${useremailid}`,
              userData
            )
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          userData_id = response.data[existingProductIdIndex]._id;
          delete response.data[existingProductIdIndex]._id;
          response.data[existingProductIdIndex].quantity =
            parseInt(response.data[existingProductIdIndex].quantity) + 1;
          axios
            .put(
              `https://crudcrud.com/api/5508a1dcc0ea4ce3b14bd3981c5aa9f5/cart${useremailid}/${userData_id}`,
              response.data[existingProductIdIndex]
            )
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <>
                  <h3>{props.title}</h3>,<h3>{props.price}</h3>,
                  <Link to={`/${props.productId}`}>
                    {<img src={props.imageUrl} alt="" />}
                  </Link>
                </>
                <Button variant="primary" onClick={addItemToCart}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductItems;
