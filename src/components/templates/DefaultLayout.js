import React, { useState } from 'react'
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import '../../css/layout.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderRoute from '../HeaderRoute';
import Routes from '../Routes';

function DefaultLayout(props) {
    const menuList = props.menuList
    const [collapsed,setCollapsed] = useState(false);
    
    const toggle = () => {
        setCollapsed(!collapsed);
    };  
      
    const { Header, Content, Sider } = Layout;  
        
    return (
        <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"></div>
            <HeaderRoute menuList={menuList}/>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 380,
              }}
            >
              <Routes menuList={menuList}/>
            </Content>
          </Layout>
        </Layout>
      </Router>        
    )
}

export default DefaultLayout
