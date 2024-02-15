import React, { useState } from "react";
import "./index.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import AssignedOrderPool from "./layout/AssignedOrderPool";
import Orderedpool from "./layout/Orderedpool";
import TranslatioOffice from "./layout/TranslationOffice";
import Colaps from "./layout/Colaps";
import Colaps2 from "./layout/Colaps2";
import Colaps3 from "./layout/Colaps3";

function Dashboard() {
  const [data, updata] = useState(1);
  console.log("tab", data);
  function toogleupdata(id) {
    updata(id);
  }

  const items = [
    {
      label: <a href="https://www.antgroup.com">FN</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">AR</a>,
      key: "1",
    },
    {
      type: "divider",
    },
  ];
  return (
    <section className="p-5 ">
      <div className="flex flex-row justify-between">
        <input
          type="text"
          className="w-[600px] h-8 py-6 px-2"
          placeholder="search some thing"
        />

        <div className="flex flex-row gap-7 pr-8">
          <img src="./images/notification.svg" alt="" />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="shadow-md p-2 bg-white"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="font-bold">
                En
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <div id="span">
            <h1 className="font-bold">welcome</h1>{" "}
            <span className="text-[#7C047A] font-bold">Admin</span>
          </div>
        </div>
      </div>
      <h1 className=" text-[#7C047A] mt-3 font-bold text-xl ">Dashboard</h1>
      <div className="mt-3 mb-2 flex flex-row justify-between items-center">
        <ul
          className="flex flex-row gap-5 w-[450px] border-2 py-2 bg-white "
          id="ul"
        >
          <li className="cursor-pointer" onClick={() => toogleupdata(1)}>
            ordered pool
          </li>
          <li className="cursor-pointer" onClick={() => toogleupdata(2)}>
            Assigned order pool
          </li>
          <li className="cursor-pointer" onClick={() => toogleupdata(3)}>
            Translation offices
          </li>
        </ul>
        <div className="pr-8">
          <button className="px-5 py-2  text-gray-200 bg-[purple]">
            Review monthly Report
          </button>
        </div>
      </div>
      {/* <h1 className={data === 1 ? "head2" : "head"}>hello1</h1>
      <h1 className={data === 2 ? "head2" : "head"}>hello2</h1>
      <h1 className={data === 3 ? "head2" : "head"}> hello3</h1> */}

      <div className="flex flex-row justify-between">
        <div className="w-[650px] border-2 bg-white ">
          {data === 1 ? (
            <Orderedpool />
          ) : data === 2 ? (
            <AssignedOrderPool />
          ) : (
            <TranslatioOffice />
          )}
        </div>
        <div className="flex flex-col">
          <Colaps className="w-44" />
          <Colaps2 />
          <Colaps3 />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
