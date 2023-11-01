import React from "react"; //import thư viện react
import "./Content.css"; //import file css để css cho nội dụng của component hiện tại.
import City from "./City/City"; //import component ctiy
import Type from "./Type/Type"; //import component type
import Hotel from "./Hotel/Hotel"; //import component hotel

// ở phần này tạo ra 3 components như city type hotel, sau đó import vào đây, để dễ quản lý và đông fthoiwf truyền một vài dữ liệu vào cho các component
const Content = (props) => {
  return (
    <div id="content-home">
      <City city={props.city}></City>
      <h3 className="content-title">Browse by property type</h3>
      <Type type={props.type}></Type>
      <h3 className="content-title">Home guests love</h3>
      <Hotel hotelList={props.hotelList}></Hotel>
    </div>
  );
};
export default Content; //xuất dữ liệu ra ngoài
