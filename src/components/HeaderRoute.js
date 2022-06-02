import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import {
    UserOutlined,
  } from '@ant-design/icons';

const menuData = [
    {"url":"/aladin","name":"Aladin"},
    {"url":"/lionking","name":"lionking"},
    {"url":"/spiderman","name":"spiderman"},
    {"url":"/reduxCronology","name":"reduxCronology"},
    {"url":"/mobX","name":"mobX"},
    {"url":"/reduxHook","name":"redux + hook"},
    {"url":"/divComp","name":"division component"},
    {"url":"/pureSearch","name":"기본 HTML"},
];

function HeaderRoute(props) {
    const {menuList} = props;
    const menu = menuList.map((menu,index) =>{
        return (
            <Menu.Item key={index}>
                <UserOutlined />
                <Link to={`${menu.url}`}>{menu.name}</Link>
            </Menu.Item>
        )
    })

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menu}
        </Menu>
    )
}

export default HeaderRoute
