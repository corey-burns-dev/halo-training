import type React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { Layout } from "./components/Layout";
import { Category } from "./pages/Category";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:categoryId" element={<Category />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
