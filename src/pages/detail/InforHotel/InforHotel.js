import React from "react"; //import thư viện react
import "./InforHotel.css"; // import file css vào để style cho component hiện tại

//  tạo component inforhotel
const InforHotel = (props) => {
  // dữ liệu props được truyền vào từ file detail.jsx
  return (
    <div id="inforHotel">
      <div className="inforHotel-container">
        <div className="inforHotel-title">
          <h2>{props.detail.name}</h2>
          <button>Reverve or Book Now</button>
        </div>
        <p>{props.detail.address}</p>
        <p className="inforHotel-distance">{props.detail.distance}</p>
        <p>{props.detail.price}</p>
        <ul className="infor-img">
          {/* //sữ dụng hàm map để render dữ liệu hỉnh ảnh, dữ liệu được truyền vào thông qua props */}
          {props.detail.photos.map((el, i) => {
            return (
              <li key={i}>
                <img src={el}></img>
              </li>
            );
          })}
        </ul>
        <div className="infor-descripts">
          <div className="descripts-title">
            <h3>{props.detail.title}</h3>
            <p>{props.detail.description}</p>
          </div>
          <div className="descripts-adverment">
            <h3>Perfect for a 9-night stay!</h3>
            <p>
              Located in the real heart of krakow, this property has an
              execllent location score of 9.81
            </p>
            <p>
              <b> ${props.detail.nine_night_price} </b>(9 nights)
            </p>
            <button>Reverve or Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InforHotel; // xuất dữ liệu ra ngoài
