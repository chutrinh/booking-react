import React, { useState } from "react"; //import thư viện react
import { DateRange } from "react-date-range"; // import thư viện date range để tạo giao diện chọn ngày tháng năm
import "react-date-range/dist/styles.css"; // Import CSS của thư viện
import "react-date-range/dist/theme/default.css"; // Import CSS của theme mặc định

// tạo component calendar
function Calendar(props) {
  // thêm một useState để lưu trữ trạng thái
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // xữ lý sự kiện khi người dùng thay đổi lịch chọn
  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange([dateRange.selection]);
    props.dataRanges(dateRange);
  };

  return (
    <div>
      <DateRange ranges={selectedDateRange} onChange={handleDateRangeChange} />
    </div>
  );
}

export default Calendar; // xuất dữ liệu ra ngoài
