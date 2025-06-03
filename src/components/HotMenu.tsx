import Items from "./Items";
import hotmenu from "../hotmenu.json";

const HotMenu = () => {
  const menus = hotmenu;
  return (
    <>
      <div className="border d-flex flex-wrap gap-3">
        {menus.map((items) => (
          <div key={items.id} className="col-3">
            <Items title={items.title} price={items.price} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HotMenu;
