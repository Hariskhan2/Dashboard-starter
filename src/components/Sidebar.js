import React, { useState } from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom'

import { motion } from "framer-motion";

import { SidebarData } from "../Data/Data";
import {  UilBars } from "@iconscout/react-unicons";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>

      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
         animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
       
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link
              to={item.route}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                
                <item.icon />
                <span>{item.heading}</span>
              
              </Link>
            );
          })}
          {/* <div className="menuItem">
            <UilSignOutAlt />
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
