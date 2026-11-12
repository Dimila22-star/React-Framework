import { useState } from "react";

function FeatureCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [available, setAvailable] = useState(props.available);

  function handleUpdate(event) {
    event.preventDefault();

    props.onUpdate({
      ...props.product,
      title,
      price: Number(price),
      available,
    });

    setIsEditing(false);
  }

  return (
    <div className="card">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label>
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
            Available
          </label>

          <button type="submit">Save Changes</button>

          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <img className="card-img" src={props.image} alt={props.title} />

          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <p className="price">${props.price}</p>

          <p>{props.available ? "In Stock" : "Out of Stock"}</p>

          <button
            className="add-btn"
            onClick={props.onAdd}
            disabled={!props.available}
          >
            {props.available ? "Add to cart" : "Unavailable"}
          </button>

          <button onClick={() => setIsEditing(true)}>Update</button>

          <button onClick={props.onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default FeatureCard;