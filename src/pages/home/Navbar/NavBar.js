import React, { useState } from "react"; // import thư viện react
import "./NavBar.css"; // import file navbar css vào để css cho component hiện tại

// tạo component navbar
const NavBar = (props) => {
  // tạo css để hiển thị boder cho từng memu trên thanh navbar khi được active
  const activeBorder = {
    border: "1px solid white",
    borderRadius: "20px",
  };
  // sử dụng userstate để lưu trữ trạng thái active
  const [active, setActive] = useState(props.navbar);
  const openBoder = (e) => {
    if (
      e.target.nodeName === "A" ||
      e.target.nodeName === "LI" ||
      e.target.nodeName === "I"
    ) {
      // set active bằng true hoặc false dựa vào dữ liệu trả về từ mãng props.navbar
      setActive(
        active.map((el, i) => {
          if (i === Number(e.target.closest("li").getAttribute("index"))) {
            el.active = true;
            return el;
          } else {
            el.active = false;
            return el;
          }
        })
      );
    }
  };
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="nav-user">
          <h2>Booking Website</h2>
          <div>
            <button className="btn-nav">Register</button>
            <button className="btn-nav">Login</button>
          </div>
        </div>
        {/* ------------------------------ */}
        <ul className="nav-list " onClick={openBoder}>
          {/* sử dụng hàm map để render dữ liệu ra ngoài */}
          {active.map((el, i) => {
            return (
              <li
                style={el.active === true ? activeBorder : {}}
                key={i}
                index={i}
              >
                <a href="#">
                  <i className={el.icon}></i> {el.type}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default NavBar; // xuất dữ liệu ra ngoài
