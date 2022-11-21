import React from 'react'
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import classes from './AppLayout.module.scss'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import Home from '../../views/Home/Home'
import About from '../../views/About/About';

function AppLayout() {
  return (
    <div className={classes.main}>
        <SideBar/>
        <div className={classes.content_session}>
          <div className={classes.main_content}>
            <Header/>
            <Routes>
                <Route path="/about" element={<About />}/>
                <Route path="/home" element={<Home />}/>
                <Route index element={<Home />}/>
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default AppLayout