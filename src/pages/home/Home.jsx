import React, { useState } from "react"; //import thư viện react
import NavBar from "./Navbar/NavBar"; // import component navbar
import Header from "./Header/Header"; // import component header
import Content from "./Content/Content"; // import component content
import FormRegister from "./FormRegister/FormRegister"; // import component FormRegister
import Footer from "./Footer/Footer"; // import component Footer

// // tryền liệu vào các components thông qua props
const Home = (props) => {
  return (
    <div>
      <NavBar navbar={props.navbar}></NavBar>
      <Header></Header>
      <Content
        city={props.city}
        type={props.type}
        hotelList={props.hotelList}
      ></Content>
      <FormRegister></FormRegister>
      <Footer footer={props.footer}></Footer>
    </div>
  );
};

export default Home; // xuất dữ liệu ra ngoài
