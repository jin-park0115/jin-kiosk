import { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

interface ExtraProp {
  title: string;
  price: string;
}

const Extra = (props: ExtraProp) => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 1);
    if (count >= 10) {
      alert("최대 개수 초과입니다");
      setCount(0);
    }
  };
  const handleMinusCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      alert("더이상 줄이지 못합니다.");
      setCount(0);
    }
  };

  return (
    <ExtraButton>
      <div>
        <p>{props.title}</p>
        <p>+{props.price}</p>
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
`;
