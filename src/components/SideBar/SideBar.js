import React, { useState } from "react";

import * as AiIcons from "react-icons/ai";
import classes from "./SideBar.module.scss";
import { SidebarData } from "../../utils/sidebarData";
import SubMenu from "../SubMenu/SubMenu";
import Home from "../../views/Home/Home";

function SideBar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* <div
        className={`${
          sidebar ? classes.sidebar_nav : classes.sidebar_nav_hide
        }`}
      > */}
      <div className={classes.sidebar_nav}>
          <div className={classes.SidebarWrap}>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
      </div>
        
      {/* </div> */}
      
      {/* <Home/> */}

    </>
  );
}

export default SideBar;
