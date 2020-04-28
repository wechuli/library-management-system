import React from "react";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = (props) => {
  const { mode } = props;
  return (
    <Menu mode={mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>My Books</span>}>
        <Menu.Item key="loans">My Loans</Menu.Item>
        <Menu.Item key="favorites">Favorites</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default LeftMenu;
