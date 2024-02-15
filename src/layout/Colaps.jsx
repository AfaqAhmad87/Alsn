import React from "react";
import { useState } from "react";
import { Collapse, Select } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import img6 from "../notification.svg";
const { Option } = Select;
function Colaps() {
  const [expandIconPosition, setExpandIconPosition] = useState("end");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );
  const items = [
    {
      key: "1",
      label: (
        <div className="flex flex-row space-x-8">
          <img src={img6} alt="" />
          <h1 className="font-bold text-[#7C047A]"> Important notification</h1>
        </div>
      ),

      children: (
        <div>
          <h1 className="font-bold">
            Alert <span className="text-red-600">(12)</span>
          </h1>
          <div className="flex flex-row gap-5 gap-y-3">
            <h1 className="font-bold ml-3  rounded-full">A</h1>
            <div>
              <span className="font-semibold">
                order 3535 time is getting closer
              </span>
              <h1 className="text-red-600">3hrs</h1>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-3">
            <h1 className="font-bold ml-3  rounded-full">B</h1>
            <div>
              <span className="font-semibold">
                order 3535 time is getting closer
              </span>
              <h1 className="text-red-600">3hrs</h1>
            </div>
          </div>
        </div>
      ),
      extra: genExtra(),
    },
  ];
  return (
    <div>
      <>
        <Collapse
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={expandIconPosition}
          items={items}
          className="w-[300px] mr-7"
        />
        <br />

        {/* <Select
          value={expandIconPosition}
          style={{
            margin: "0 8px",
          }}
          onChange={onPositionChange}
        >
          <Option value="start">start</Option>
          <Option value="end">end</Option>
        </Select> */}
      </>
    </div>
  );
}

export default Colaps;
