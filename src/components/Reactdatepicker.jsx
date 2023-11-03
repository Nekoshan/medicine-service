import React from 'react';
import { DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
function Reactdatepicker() {
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} open />
    </Space>
  );
}
export default Reactdatepicker;
