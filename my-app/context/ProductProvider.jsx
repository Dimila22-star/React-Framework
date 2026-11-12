/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ProductContext } from "./ProductContext";

import laptop12IntelImg from "../src/assets/laptop-12-intel.webp";
import laptop12DiyImg from "../src/assets/framework-laptop-12-diy.jpg";
import laptop13ProImg from "../src/assets/framework-laptop-13-pro.webp";
import amdRyzenImg from "../src/assets/amd-ryzen-al-3000.webp";
import laptop16Img from "../src/assets/framework-laptop-16.png";
import laptop16DiyImg from "../src/assets/framework-laptop-16-diy.jpg";
import laptop1213thGenImg from "../src/assets/framework-laptop-1213th-gen.png";
import laptop16DiyAmdImg from "../src/assets/framework-laptop-16-diy-amd-ryzen.jpg";
import refurbished13Img from "../src/assets/refurbished-framework-laptop-13.webp";
import laptop12MainboardImg from "../src/assets/framework-laptop-12-mainboard.jpg";
import laptop12Img from "../src/assets/framework-laptop-12.webp";
import ultraSeries3Img from "../src/assets/framework-ultra-series-3.webp";

const initialProducts = [
  { id: 1, title: "Laptop 12 (Intel)", text: "Compact and colorful, built to be repaired.", image: laptop12IntelImg, price: 699, category: "Framework Laptop", available: true },
  { id: 2, title: "Laptop 12 DIY Edition", text: "Assemble it yourself in minutes.", image: laptop12DiyImg, price: 549, category: "Framework Laptop", available: true },
  { id: 3, title: "Laptop 13 Pro", text: "Premium build with a sharp display.", image: laptop13ProImg, price: 1399, category: "Framework Laptop", available: true },
  { id: 4, title: "Laptop 13 Pro (AMD Ryzen AI 300)", text: "Powerful AMD processor.", image: amdRyzenImg, price: 2299, category: "Framework Laptop", available: true },
  { id: 5, title: "Laptop 16", text: "Our biggest screen.", image: laptop16Img, price: 1839, category: "Framework Laptop", available: true },
  { id: 6, title: "Laptop 16 DIY Edition", text: "Bring your own memory and storage.", image: laptop16DiyImg, price: 1249, category: "Framework Laptop", available: true },
  { id: 7, title: "Laptop 12 (13th Gen)", text: "Ready to use out of the box.", image: laptop1213thGenImg, price: 699, category: "Framework Laptop", available: true },
  { id: 8, title: "Laptop 16 DIY (AMD Ryzen)", text: "DIY with an AMD processor.", image: laptop16DiyAmdImg, price: 1299, category: "Framework Laptop", available: true },
  { id: 9, title: "Refurbished Laptop 13", text: "Tested and ready at a lower price.", image: refurbished13Img, price: 729, category: "Framework Laptop", available: true },
  { id: 10, title: "Laptop 12 Mainboard", text: "Upgrade the brain of your laptop.", image: laptop12MainboardImg, price: 399, category: "Mainboards", available: true },
  { id: 11, title: "Framework Laptop 12", text: "Built to be repaired.", image: laptop12Img, price: 699, category: "Framework Laptop", available: true },
  { id: 12, title: "Laptop 13 (Intel Core Ultra Series 3)", text: "Latest Intel processor.", image: ultraSeries3Img, price: 1599, category: "Framework Laptop", available: true },
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  function addProduct(newProduct) {
    setProducts((previousProducts) => [
      { ...newProduct, id: Date.now(), available: true },
      ...previousProducts,
    ]);
  }

  function updateProduct(updatedProduct) {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  }

  function deleteProduct(id) {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== id)
    );
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}