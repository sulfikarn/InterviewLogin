import React from 'react'
import * as FaIcons from "react-icons/fa";
import classes from './Header.module.scss'

function Header() {
  return (
    <div className={classes.nav}>
        <div className={classes.navIcon}>
          <FaIcons.FaBars  />
        </div>
        <h1
          style={{ textAlign: "center", marginLeft: "200px", color: "green" }}
        >
          React Interview Test
        </h1>
      </div>
  )
}

export default Header