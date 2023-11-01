import React from "react"; // import thư viện react
import "./TableContent.css"; // import file tableContent vào để css cho component hiện tại

// tạo component tablecontent để chứa các nội dung tìm kiếm
const TableContent = (props) => {
  return (
    <div>
      {/* sử dụng hàm map để render các dữ liệu được đưa vào thông qua props */}
      {props.search.map((el, i) => {
        return (
          <div id="table-search" key={i}>
            <img src={el.image_url}></img>
            <div className="card-detail">
              <h3>{el.name}</h3>
              <p>{el.name}</p>
              <p>{el.tag}</p>
              <p>{el.description}</p>
              <p>{el.type}</p>
              <p>Free cancellation</p>
              <p>You can cancel later, so lock in this great price today!</p>
            </div>
            <div className="card-price">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{el.rate_text}</span>
                <span
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  {el.rate}
                </span>
              </div>
              <div className="price">
                <p>${el.price}</p>
                <p>incluea taxes and fees</p>
                <button>see availability</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TableContent; // xuất dữ liệu ra ngoài
