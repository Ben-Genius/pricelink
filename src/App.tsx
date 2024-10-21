import { Routes, Route } from "react-router-dom";
import MainHome from "./homepage/mainHome";
import Header from "./homepage/header/header";
import SearchResults from "./searchResult/mainSearch";
import ProductDetail from "./productDetail/mainProduct";
import CurrencyConverter from "./currencyConverter/mainCurrencyConverter";
import "./App.css";
import Footer from "./homepage/footer/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 ">
      <Header />
      <div className="w-[90%] mx-auto overflow-hidden ">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="product" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/converter" element={<CurrencyConverter />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
