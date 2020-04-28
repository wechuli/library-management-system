import React from "react";
import { Menu, Button } from "antd";

const RightMenu = (props) => {
  const { mode } = props;
  return (
    <Menu mode={mode}>
      <Menu.Item key="mail">
        <a href="/login">Signin</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/register">Signup</a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
