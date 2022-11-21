import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SubMenu.module.scss";

function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <Link
        to={item.path}
        onClick={item.subNav && showSubnav}
        // onClick={showSubnav}
        className={classes.sidebarLink}
      >
        <div>
          {item.icon}
          <span className={classes.sidebarLabel}>{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index} className={classes.dropdownLink}>
              {item.icon}
              <span className={classes.SidebarLabel}>{item.title}</span>
            </Link>
          );
        })}
    </>
  );
}

export default SubMenu;
