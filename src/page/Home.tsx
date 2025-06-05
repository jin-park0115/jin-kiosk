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
        <Cart />
      </Container>
    </>
  );
};
export default Home;
