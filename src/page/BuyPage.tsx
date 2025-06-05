import { useEffect, useState } from "react";

type ItemsState = {
  id: number;
  title: string;
  price: string;
  option: string;
};

const BuyPage = () => {
  const [items, setItems] = useState<ItemsState[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setItems(JSON.parse(cart));
    }
  }, []);

  const totalPrice = items.reduce((sum, item) => {
    return sum + parseInt(item.price);
  }, 0);

  return (
    <>
      <h1>buyPage</h1>
      {items.map((item) => (
        <div className="border" key={item.id}>
          <p>
            메뉴명 : {item.option} {item.title}
          </p>
          <p>가격 : {item.price}원</p>
        </div>
      ))}
      <p>결제 금액: {totalPrice.toLocaleString()}원</p>
      <div>결제하기</div>
      <div>뒤로가기</div>
    </>
  );
};

export default BuyPage;
// prcie를 이제 number로 해서 총 합이 나와야 겠지 진아.
// state로 해보자 parseInt해서 슈슈슛
// const price = items.map((item) => item.price);
// const total = price.map(Number); 흠 이렇게 해도 안되는군
// 찾아보니 reduce함수를 사용해야함.
