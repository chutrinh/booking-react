import React, { useState } from "react"; // import thư viện react
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // import thư viện router để tạo liên kết khi click chuyển trang
import "./Header.css"; // import file css header vào để css cho component hiện tại
import Calendar from "./Date"; // import thư viện calender để tạo date

// tạo component header
const Header = (props) => {
  // sử dụng useState để render lại dữ liệu của các trường input
  const [hidden, setHidden] = useState("hidden");
  const [valueDate, setvalueDate] = useState("");
  // sử dụng event document để ẩn modal calender khi click
  document.addEventListener("click", function (e) {
    const parentElement = document.getElementById("tableDate");
    if (parentElement && !parentElement.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();
      setHidden("hidden");
    }
  });
  const handleDate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hidden === "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };
  // tạo hàm onchange giã để trường input không bị báo lỗi
  function change() {}
  // nhân sự kiện từ calender để hiển thị ngày tháng năm vào trường input
  function dataRange(data) {
    setvalueDate(
      `${data.selection.startDate.getDate()}/${
        data.selection.startDate.getMonth() + 1
      }/${data.selection.startDate.getFullYear()} to ${data.selection.endDate.getDate()}/${
        data.selection.endDate.getMonth() + 1
      }/${data.selection.endDate.getFullYear()}`
    );
  }
  return (
    <div id="header">
      <div className="header-container">
        <h1>A lifetime of discounts? It's genius</h1>
        <p>
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
        <button className="header-btn">sign in / Register</button>
        <form id="form-header">
          <div>
            <i className="fa fa-bed"></i>
            <input type="text" placeholder="where are you going?"></input>
          </div>
          <div>
            <i className="fa fa-calendar"></i>
            <input
              type="text"
              onClick={handleDate}
              value={valueDate}
              onChange={change}
              placeholder="7/7/2023 to 7/7/2023"
            ></input>
            <div id="tableDate" className={hidden}>
              <Calendar dataRanges={dataRange}></Calendar>
            </div>
          </div>
          <div>
            <i className="fa fa-female"></i>
            <input type="text" placeholder="1 adult 0 children 1 room"></input>
          </div>
          <Link className="btn-search" to={"/search"}>
            Search
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Header; //xuất dữ liệu ra ngoài
