import React from "react";
import { Table } from "antd";

function AssignedOrderPool() {
  const dataSource = [
    {
      key: "1",
      name: "6655",
      age: "Birthday Certificate",
      address: "Urdu",
      target: "arabic",
      watch: "25",
      remainingtime: "5 hr",
    },
    {
      key: "2",
      name: "6655",
      age: "Birthday Certificate",
      address: "Urdu",
      target: "arabic",
      watch: "25",
      remainingtime: "7 hr",
    },
    {
      key: "3",
      name: "6665",
      age: "Birthday Certificate",
      address: "French",
      target: "arabic",
      watch: "47",
      remainingtime: "5 hr",
    },
    {
      key: "4",
      name: "6665",
      age: "CNIC",
      address: "French",
      target: "arabic",
      watch: "50",
      remainingtime: "3 hr",
    },
    {
      key: "5",
      name: "6665",
      age: "CNIC",
      address: "French",
      target: "arabic",
      watch: "50",
      remainingtime: "2 hr",
    },
  ];
  const columns = [
    {
      title: "order no#",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Document type",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Document Language",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Target Language",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "No of Watch",
      dataIndex: "watch",
      key: "watch",
    },
    {
      title: "Time Remaining",
      dataIndex: "remainingtime",
      key: "remainingtime",
    },
  ];
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-white">
        <div className="py-5 px-2 ">
          <h1 className="text-[#ac55aa] text-2xl font-semibold">
            Assigned Order Progress <span className="text-[black]">(16)</span>
          </h1>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}

export default AssignedOrderPool;
