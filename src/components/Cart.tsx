import { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        type="button"
        className="btn border btn-primary"
        style={{ width: "80px" }}
      >
        {count}
      </button>
    </>
  );
};

export default Cart;
