import Items from "./Items";
import menuData from "../menuData.json";
import NavMenu from "./NavMenu";

const IceMenu = () => {
  const menus = menuData;
  return (
    <>
      <NavMenu />
      <div className="border d-flex flex-wrap gap-2">
        {menus.map((items) => (
          <div key={items.id} className="col-3">
            <Items title={items.title} price={items.price} />
          </div>
        ))}
      </div>
    </>
  );
};

export default IceMenu;

// 잠깐 보류
// 사용 안함
