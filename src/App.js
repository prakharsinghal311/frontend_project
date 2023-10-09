import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <>
      {/* <CardProvider> */}
      <BrowserRouter>
        <Layout />
        {/* <Routes>
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:productId" element={<ProductDetail />} />
          <Route path="/ContactUS" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes> */}
        {/* <LowerCard className={classes.lowerCard} /> */}
      </BrowserRouter>
      {/* </CardProvider> */}
    </>
  );
}

export default App;
