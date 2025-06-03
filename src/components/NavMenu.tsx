import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <>
      <Navbar className="bg-body-secondary">
        <Navbar.Brand as={Link} to="/" className="fs-5">
          COFFEE
        </Navbar.Brand>
        {/* <Navbar.Text className="fs-4" style={{ cursor: "pointer" }}>
          <Link to="/ice" style={{ textDecoration: "none" }}>
            ICE
          </Link>
        </Navbar.Text> 일단 없애기 */}
        {/* <Navbar.Text
          className="fs-4"
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          <Link to="/hot" style={{ textDecoration: "none" }}>
            HOT
          </Link>
        </Navbar.Text> */}
      </Navbar>
    </>
  );
};

export default NavMenu;
