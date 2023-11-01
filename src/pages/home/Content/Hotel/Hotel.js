import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //import component link từ thư viện react-router-dom để thực hiện việc chuyển hướng đến một trang khác sau khi click vào một element.
import React from "react"; //import thư viện react
import "./Hotel.css"; //import file css hotel để css cho component này

// tạo component hotel để đưa vào cho compoenet content.js
const Hotel = (props) => {
  return (
    <ul id="content-hotel">
      {/* sử dụng hàm map để render dữ liệu được truyền vào thông qua prop từ data json */}
      {props.hotelList.map((el, i) => {
        return (
          <li key={i}>
            <img src={el.image_url}></img>
            <Link to={"/detail"}>{el.city}</Link>
            <p>starting from ${el.price}</p>
            <span className="rate">{el.rate}</span>
            <span>{el.type}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Hotel; //xuất component hotel để đưa vào cho compoenet content.js
