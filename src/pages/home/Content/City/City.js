import React from "react"; // import thư viện react
import "./City.css"; // import file css để css cho component hiện tại này.
// tạo component City
const City = (props) => {
  return (
    <ul id="content-city">
      {/* //sữ dụng hàm map để render các dữ liệu đã được truyền vào từ file json */}
      {props.city.map((el, i) => {
        return (
          <li key={i}>
            <h3>{el.name}</h3>
            <p>{el.subText}</p>
            <img src={el.image}></img>
          </li>
        );
      })}
    </ul>
  );
};
export default City; //xuất dữ liệu ra ngoài để đưa vào component content.js
