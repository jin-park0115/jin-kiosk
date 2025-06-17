import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

interface ExtraProp {
  title: string;
  price: string;
  onChange: (title: string, price: string, count: number) => void;
}

const Extra = ({ title, price, onChange }: ExtraProp) => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    if (count >= 10) {
      alert("최대 개수 초과입니다");
      return;
    }
    const newCount = count + 1;
    setCount(newCount);
    onChange(title, price, newCount);
  };

  const handleMinusCount = () => {
    if (count <= 0) {
      alert("더이상 줄이지 못합니다.");
      return;
    }
    const newCount = count - 1;
    setCount(newCount);
    onChange(title, price, newCount);
  };

  useEffect(() => {
    onChange(title, price, count);
  }, [count]);

  return (
    <ExtraButton>
      <div>
        <p>{title}</p>
        <p>+{price}</p>
      </div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100px" }}
      >
        <Button variant="outline-primary" onClick={handleMinusCount}>
          -
        </Button>
        <div>{count}</div>
        <Button variant="outline-primary" onClick={handleAddCount}>
          +
        </Button>
      </div>
    </ExtraButton>
  );
};

export default Extra;

const ExtraButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;
