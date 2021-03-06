import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationHeader from "./components/NavigationHeader";
import NavigationFooter from "./components/NavigationFooter";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./components/products-page/ProductDetails";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import { useState, useEffect } from "react";
import { productsContext } from "./contexts/productsContext";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://products-rendergui.herokuapp.com/items"
        );
        const data = await response.json();
        setProducts(data);
      } catch {
        throw new Error("Something went wrong!");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <productsContext.Provider value={{ products, setProducts }}>
        <BrowserRouter>
          <NavigationHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <NavigationFooter />
        </BrowserRouter>
      </productsContext.Provider>
    </div>
  );
};

export default App;
