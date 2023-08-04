import React from "react";
import "./SidebarList.css";
import profilepic from "../../image/t.jpg";

import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech } from "react-icons/md";

import { MdCastForEducation } from "react-icons/md";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          <ul>
            <li>
              {" "}
              <FcHome size={30} /> Home{" "}
            </li>
            <li>
              {" "}
              <FcNightPortrait size={30} /> About{" "}
            </li>
            <li>
              {" "}
              <FcFactory size={30} /> Work Experience{" "}
            </li>
            <li>
              {" "}
              <MdBiotech size={30} color="orange" /> Tech Stack{" "}
            </li>
            <li>
              {" "}
              <MdCastForEducation size={30} color="yellow" /> Education{" "}
            </li>
            <li>
              {" "}
              <FcTodoList size={30} /> Projects{" "}
            </li>
            <li>
              {" "}
              <FcSalesPerformance size={30} /> Tertimonial{" "}
            </li>
            <li>
              {" "}
              <FcContacts size={30} /> Contact{" "}
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li>
              {" "}
              <FcHome size={30} />
            </li>
            <li>
              {" "}
              <FcNightPortrait size={30} />
            </li>
            <li>
              {" "}
              <FcFactory size={30} />
            </li>
            <li>
              {" "}
              <MdBiotech size={30} color="orange" />
            </li>
            <li>
              {" "}
              <MdCastForEducation size={30} color="yellow" />
            </li>
            <li>
              {" "}
              <FcTodoList size={30} />
            </li>
            <li>
              {" "}
              <FcSalesPerformance size={30} />
            </li>
            <li>
              {" "}
              <FcContacts size={30} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
