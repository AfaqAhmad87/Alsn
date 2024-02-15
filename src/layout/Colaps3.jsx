import React from "react";
import { useState } from "react";
import { Collapse, Select } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import img6 from "../notification.svg";
import img7 from "../image/Revenue.svg";
import img8 from "../image/Polygon 98.svg";
const { Option } = Select;
function Colaps3() {
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
          <h1 className="font-bold text-[#7C047A]"> KPI'S</h1>
        </div>
      ),

      children: (
        <>
          <div className="border-2 flex flex-col p-2 font-bold rounded-md mt-1 ">
            <h1>Total orders</h1>
            <div className="flex flex-row items-center ">
              <h1 className="text-2xl text-[#00ABBC]">730/1000</h1>
            </div>
          </div>
          <div className="border-2 flex flex-col p-2 font-bold rounded-md mt-1 ">
            <div className="flex flex-row">
              <h1 className="">Total Revenue Generated</h1>
              {/* <img src={img7} alt="" className="pl-10" /> */}
            </div>
            <div className="flex flex-row items-center ">
              <h1 className="text-2xl text-[#7C047A]">50,000</h1>
              <div className="flex flex-row ml-[120px] items-center gap-1">
                <span>{/* <img src={img8} alt="" /> */}</span>
              </div>
            </div>
          </div>
          <div className="border-2 flex flex-col p-2 font-bold rounded-md mt-1 ">
            <div className="flex flex-row">
              <h1 className="">Total Refunds</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
              <h1 className="text-2xl text-[#F6911E] mr-10">4,000</h1>
              <div className="flex flex-row ml-[140px] items-center gap-1 ">
                <span>{/* <img src={img8} alt="" /> */}</span>
              </div>
            </div>
          </div>
        </>
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

export default Colaps3;
