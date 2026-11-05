import { useState } from "react";

export default function AddProductForm({ onAddProduct, categories }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !price) return;

    onAddProduct({
      title,
      price: Number(price),
      category,
      text: text || "Custom added product.",
    });

    setTitle("");
    setPrice("");
    setText("");
  }

  return (
    <div className="add-product-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Short description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="add-product-btn">Add Product</button>
      </form>
    </div>
  );
}