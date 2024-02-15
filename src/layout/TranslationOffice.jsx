import React from "react";
import { Table } from "antd";

function TranslatioOffice() {
  const dataSource = [
    {
      key: "1",
      name: "6655",
      age: "ABC Translation office",
      address: "NIC NITZ",
      target: "ABC@gmail.com",
      watch: "(041)34233",
      remainingtime: "5 hr",
    },
    {
      key: "2",
      name: "6655",
      age: "ABC Translation office",
      address: "NIC NITZ",
      target: "ABC@gmail.com",
      watch: "(041)34233",
      remainingtime: "7 hr",
    },
    {
      key: "3",
      name: "6665",
      age: "ABC Translation office",
      address: "NIC NITZ",
      target: "ABC@gmail.com",
      watch: "(041)34233",
      remainingtime: "5 hr",
    },
    {
      key: "4",
      name: "6665",
      age: "ABC Translation office",
      address: "NIC NITZ",
      target: "ABC@gmail.com",
      watch: "(041)34233",
      remainingtime: "3 hr",
    },
    {
      key: "5",
      name: "6665",
      age: "ABC Translation office",
      address: "NIC NITZ",
      target: "ABC@gmail.com",
      watch: "(041)34233",
      remainingtime: "2 hr",
    },
  ];
  const columns = [
    {
      title: "Translation office ID",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Translation office Name",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Contact person",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Contact Email",
      dataIndex: "target",
      key: "target",
    },
    {
      title: "Contact phone",
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
            Translation Offices
          </h1>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}

export default TranslatioOffice;
