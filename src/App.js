import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import TabRenderer from './containers/TabController';

const { Header, Content, Footer } = Layout;
function App() {
    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home',
        },
    ];
    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={menuItems}
                    defaultSelectedKeys={['home']}
                />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <TabRenderer />
            </Content>
            <Footer style={{ textAlign: 'center', background: 'white' }}>
                Created By ©Hamza
            </Footer>
        </Layout>
    );
}

export default App;
