// import những thư viện react
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

// import dữ liệu để truyền vào các component
import navbarJS from "./data/navBar.json";
import cityJS from "./data/city.json";
import typeJS from "./data/type.json";
import hotelListJS from "./data/hotel_list.json";
import footerJS from "./data/footer.json";
import searchJS from "./data/search.json";
import detailJS from "./data/detail.json";

// tryền liệu đã import vào cho các page như home, search, và detail thông qua props
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* trang home mặc định sẽ chạy đầu tiên */}
        <Route
          path="/"
          element={
            <Home
              navbar={navbarJS}
              city={cityJS}
              type={typeJS}
              hotelList={hotelListJS}
              footer={footerJS}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search navbar={navbarJS} footer={footerJS} search={searchJS} />
          }
        />
        <Route
          path="/detail"
          element={
            <Detail navbar={navbarJS} footer={footerJS} detail={detailJS} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // xuất dữ liệu ra ngoài.
