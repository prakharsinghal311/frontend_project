import ProductItems from "./ProductItems";

const productsArr = [
  {
    id: Math.random(),
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: Math.random(),
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: Math.random(),
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: Math.random(),
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Counter = () => {
  const products = productsArr.map((item, index) => (
    <ProductItems
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      productId={`P${index + 1}`}
    />
  ));

  return <ul>{products}</ul>;
};

export default Counter;
