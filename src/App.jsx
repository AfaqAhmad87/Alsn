import { useState } from "react";
import "./index.css";

import Dashboard from "./Dashboard";

function App() {
  return (
    <main className="flex flex-row w-full h-full">
      <aside className="w-72 h-screen bg-[#fff]">
        <div className=" flex justify-center items-center">
          <img src="./images/Logo.png" alt="" />
        </div>
        <ul id="li-list" className=" px-1">
          <li>
            <a href="">
              <img src="./images/list.svg" alt="" className="" id="img" />
            </a>
            dashboard
          </li>
          <li>
            <a href="">
              <img src="./images/translate2.svg" alt="" />
            </a>
            Translate-Text
          </li>
          <li>
            <span>
              <img src="./images/ticket.svg" alt="" />
            </span>
            Tickets
          </li>
          <li>
            <span>
              <img src="./images/usd.svg" alt="" />
            </span>
            Manage Orders
          </li>
          <li>
            <span>
              <img src="./images/chat.svg" alt="" />
            </span>
            chats
          </li>
          <li>
            <a href="">
              <img src="./images/usd.svg" alt="" />
            </a>
            dashboard
          </li>{" "}
          <span className="pl-16">other features</span>
          <li>
            <a href="">
              <img src="./images/usd.svg" alt="" />
            </a>
            Finance
          </li>{" "}
          <li>
            <a href="">
              <img src="./images/Settings.svg" alt="" />
            </a>
            Language Manager
          </li>{" "}
          <li>
            <a href="">
              <img src="./images/translate.svg" alt="" />
            </a>
            Content Managment
          </li>{" "}
          <li>
            <a href="">
              <img src="./images/contentmanag.svg" alt="" />
            </a>
            Content Manager
          </li>{" "}
          <li>
            <a href="">
              <img src="./images/Settings.svg" alt="" />
            </a>
            Account Setting
          </li>
          <li className="mt-4 bg-[#eee]">
            <a href="">
              <img src="./images/frame.svg" alt="" />
            </a>
            Log out
          </li>
        </ul>
      </aside>
      <Dashboard />
    </main>
  );
}

export default App;
