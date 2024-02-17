import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import LoginPage from "../views/Login";
import About from "../views/About";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import ProductDetails from "../views/ProductDetails";
import SignUp from "../views/SignUp";
import Wishlist from "../views/Wishlist";
import Account from "../views/Account";

function Index() {
  return <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/check_out" element={<Checkout />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/product_details" element={<ProductDetails />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
  </>;
}

export default Index;
