import { useState } from "react";

function BuyButton() {

  const [bought, setBought] = useState(false);

  function handleBuy() {
    setBought(true);
  }

  return (
    <div className="buy">
      <button className="buy-btn" onClick={handleBuy}>
        Buy now
      </button>

      {bought && <p>Thank you for your order!</p>}
    </div>
  );
}

export default BuyButton;