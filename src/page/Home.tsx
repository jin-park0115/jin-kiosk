import { Container } from "react-bootstrap";
import Cart from "../components/Cart";
import HotMenu from "../components/HotMenu";
import NavMenu from "../components/NavMenu";

const Home = () => {
  return (
    <>
      <Container>
        <NavMenu />
        <HotMenu />
        <div className="d-flex justify-content-end mt-3">
          <Cart />
        </div>
      </Container>
    </>
  );
};
export default Home;
