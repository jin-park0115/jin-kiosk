import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState<string[]>([]);

  useEffect(() => {
    const orders = localStorage.getItem("cart");
    if (orders) {
      setTotal(JSON.parse(orders));
    } //orders에 cart가 있으면 setTotal해라
  }, []);

  const handleClick = () => {
    navigate("/buy");
  };
  return (
    <>
      <button
        type="button"
        className="btn border btn-primary"
        style={{ width: "80px" }}
        onClick={handleClick}
        disabled={total.length === 0}
      >
        {total.length}
      </button>
    </>
  );
};

export default Cart;
