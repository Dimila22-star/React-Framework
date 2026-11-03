function FeatureCard(props) {
  return (
    <div className="card">
      <div className="card-img"></div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default FeatureCard;