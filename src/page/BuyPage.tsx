import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type ExtraOption = {
  title: string;
  price: string;
  count: number;
};

type ItemsState = {
  id: number;
  title: string;
  price: string;
  option: string;
  extras?: ExtraOption[];
};

const BuyPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<ItemsState[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setItems(JSON.parse(cart));
    }
  }, []);

  const totalPrice = items.reduce((sum, item) => {
    const basePrice = parseInt(item.price);
    const extraTotal =
      item.extras?.reduce((extraSum, extra) => {
        return extraSum + parseInt(extra.price) * extra.count;
      }, 0) || 0;

    return sum + basePrice + extraTotal;
  }, 0);

  const handleCancel = () => {
    alert("취소하시겠습니까?");
    localStorage.clear();
    navigate(-1);
  };

  return (
    <div className="border" style={{ width: "60%", margin: "0 auto" }}>
      <h1>buyPage</h1>
      {items.map((item) => (
        <div className="border p-3 mb-3" key={item.id}>
          <p className="fw-semibold">
            메뉴명 : {item.option} {item.title}
          </p>
          <p className="fw-lighter">기본 가격 : {item.price}원</p>

          {item.extras && item.extras.length > 0 && (
            <div style={{ paddingLeft: "10px" }}>
              <p className="fw-light">추가 옵션:</p>
              <ul>
                {item.extras.map((extra, idx) => (
                  <li key={idx} style={{ fontSize: "0.8rem" }}>
                    {extra.title} x{extra.count} ( +
                    {(parseInt(extra.price) * extra.count).toLocaleString()}원)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <p className="fst-italic fw-bold">
        결제 금액: {totalPrice.toLocaleString()}원
      </p>
      <div className="d-flex gap-2" style={{ marginTop: "20px" }}>
        <Button variant="dark" style={{ width: "50%" }}>
          결제하기
        </Button>
        <Button variant="dark" style={{ width: "50%" }} onClick={handleCancel}>
          취소하기
        </Button>
      </div>
    </div>
  );
};

export default BuyPage;
