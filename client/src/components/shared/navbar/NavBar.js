import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import "./Navbar.css";
import Logo from "../../../assets/liblogo.jpg";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{
        // position: "fixed",
        // zIndex: 5,
        width: "100%",

        

      }}
    >
      <div className="menu__logo">
        <NavLink to="/">
          {/* <img src={Logo} style={{ width: "100%", height: "100%" }}></img> */}
          LMS
        </NavLink>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          {/* <Icon type="align-right" /> */}
          <MenuOutlined type="align-right" style={{width:"2rem"}} />
        </Button>
        <Drawer
        //   title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
