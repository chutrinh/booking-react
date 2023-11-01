import React from "react"; //import thư viện react
import InforHotel from "./InforHotel/InforHotel"; //import component inforhotel
import NavBar from "../home/Navbar/NavBar"; //import component NavBar
import Footer from "../home/Footer/Footer"; //import component Footer
import FormRegister from "../home/FormRegister/FormRegister"; //import component FormRegister

// tạo component detail
const Detail = (props) => {
  return (
    // thêm cái component
    <div>
      <NavBar navbar={props.navbar}></NavBar>
      <InforHotel detail={props.detail}></InforHotel>
      <FormRegister></FormRegister>
      <Footer footer={props.footer}></Footer>
    </div>
  );
};

export default Detail; //xuất dữ liệu ra ngoàis
