function FeatureCard(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p className="price">${props.price}</p>
      <button className="add-btn" onClick={props.onAdd}>
        Add to cart
      </button>
    </div>
  );
}

export default FeatureCard;