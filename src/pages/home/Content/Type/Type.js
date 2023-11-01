import React from "react"; // import thư viện react
import "./Type.css"; // import file css vào để css cho component hiện tại này

// tạo compoent type
const Type = (props) => {
  return (
    <ul id="content-type">
      {/* sử dụng hàm map để render dữ liệu được tryền vào thông qua props được lấy từ data json */}
      {props.type.map((el, i) => {
        return (
          <li key={i}>
            <img src={el.image}></img>
            <h3>{el.name}</h3>
            <p>{el.count} hotels</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Type; // xuất dữ liệu ra ngoài để đưa vào component content.js
