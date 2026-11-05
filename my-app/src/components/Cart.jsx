function Cart({ items, onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <aside className="cart">
      <h3>Your cart</h3>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <div className="cart-row">
                  <span>
                    {item.qty} x ${item.price}
                  </span>
                  <button className="remove-btn" onClick={() => onRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;