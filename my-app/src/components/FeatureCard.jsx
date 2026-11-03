function FeatureCard(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default FeatureCard;