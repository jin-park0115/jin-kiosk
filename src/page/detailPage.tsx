import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Extra from "../components/Extra";
import hotmenu from "../hotmenu.json";

import { Link, useNavigate, useParams } from "react-router-dom";

const extraData = [
  {
    title: "바닐라 시럽",
    addprice: "500",
  },
  {
    title: "헤이즐넛 시럽",
    addprice: "500",
  },
  {
    title: "휘핑크림 추가",
    addprice: "500",
  },
  {
    title: "펄 추가",
    addprice: "700",
  },
  {
    title: "디카페인 변경",
    addprice: "1,000",
  },
  {
    title: "샷 추가",
    addprice: "600",
  },
];

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const item = hotmenu.find((menu) => menu.id.toString() === id);
  if (!item) return <div>해당 메뉴가 없습니다.</div>;

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState("");

  const handleClick = (active: string) => {
    setIsActive(active);
  };

  const handleSubmit = () => {
    const cartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      option: isActive === "active1" ? "ICE" : "HOT",
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, cartItem]));

    alert("담았습니다");
    navigate("/");
  };

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header onClick={() => navigate("/")} closeButton>
            <Modal.Title>{item.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <p className="border-bottom text-body-secondary">옵션</p>
              <div
                className="d-flex justify-content-between"
                style={{ gap: "3px", height: "40px" }}
              >
                <OptionButton
                  $isActive={isActive === "active1"}
                  onClick={() => handleClick("active1")}
                >
                  ICE
                </OptionButton>
                <OptionButton
                  $isActive={isActive === "active2"}
                  onClick={() => handleClick("active2")}
                >
                  HOT
                </OptionButton>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <p className="text-body-secondary border-bottom">추가 옵션</p>
              {extraData.map((item, index) => (
                <div key={index}>
                  <Extra title={item.title} price={item.addprice} />
                </div>
              ))}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">
              <Link to="/">뒤로가기</Link>
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              담기
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};
// 디테일 페이지 모달창으로
export default DetailPage;

const OptionButton = styled(Button)`
  width: 50%;
  border: 1px solid #5468ff;
  color: #222;
  border-radius: 5px;
  font-size: 1.2rem;
  line-height: 1.2rem;
  transition: none;
  background-color: ${(props) => (props.$isActive ? "#5468ff" : "white")};
  &:hover {
    background-color: #5468ff;
    color: #222;
  }
`;
