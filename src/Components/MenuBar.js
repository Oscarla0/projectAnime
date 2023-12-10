import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ background: 'white' , color:'black'}}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="products" icon={<AppstoreOutlined />}>
        Products
      </Menu.Item>
      <Menu.Item key="about" icon={<UserOutlined />}>
        About Us
      </Menu.Item>
      <Menu.Item key="contact" icon={<MailOutlined />}>
        Contact
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
