import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState<string[]>([]);

  useEffect(() => {
    const orders = localStorage.getItem("cart");
    if (orders) {
      setTotal(JSON.parse(orders));
    }
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
      >
        {total.length}
      </button>
    </>
  );
};

export default Cart;
