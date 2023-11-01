import React from "react"; // import thư viện react
import ContentSearch from "./ContentSearch/ContentSearch"; // import component contentSearch
import NavBar from "../home/Navbar/NavBar"; // import component NavBar
import Header from "../home/Header/Header"; // import component Header
import Footer from "../home/Footer/Footer"; // import component Footer
import FormRegister from "../home/FormRegister/FormRegister"; // import component FormRegister

// tạo component search
const Search = (props) => {
  return (
    <div>
      <NavBar navbar={props.navbar}></NavBar>
      <Header></Header>
      <ContentSearch search={props.search}></ContentSearch>
      <FormRegister></FormRegister>
      <Footer footer={props.footer}></Footer>
    </div>
  );
};

export default Search; // xuất dữ liệu ra ngoài
