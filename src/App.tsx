import { Routes, Route } from "react-router-dom";
import MainHome from "./homepage/mainHome";
import Header from "./homepage/header/header";
import SearchResults from "./searchResult/mainSearch";
import ProductDetail from "./productDetail/mainProduct";
import Footer from "./homepage/footer/footer";
import ContactUs from "./homepage/contactUs/contactUs";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-50 max-w-full">
      <Header />
      <div className="max-w-full w-[92%] mx-auto overflow-hidden h-full">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="product" element={<SearchResults />} />
          <Route path="contact-us" element={<ContactUs />} />
          {/* <Route path="product" element={<AboutUs />} /> */}
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/converter" element={<CurrencyConverter />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
