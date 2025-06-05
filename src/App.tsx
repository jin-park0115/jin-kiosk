import { Route, Routes } from "react-router-dom";
import BuyPage from "./page/BuyPage";
import DetailPage from "./page/detailPage";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
    </>
  );
}

export default App;
