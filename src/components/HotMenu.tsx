import Items from "./Items";
import hotmenu from "../hotmenu.json";
import { useNavigate } from "react-router-dom";

const HotMenu = () => {
  const menus = hotmenu;
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div>
      <div
        className="border d-flex flex-wrap"
        style={{ gap: "10px", marginTop: "10px" }}
      >
        {menus.map((items) => (
          <div
            key={items.id}
            style={{
              flex: "0 1 calc(25% - 10px)",
              boxSizing: "border-box",
            }}
            onClick={() => handleClick(items.id)}
          >
            <Items title={items.title} price={items.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotMenu;
