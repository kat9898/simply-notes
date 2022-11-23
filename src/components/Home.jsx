import React from 'react'
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import HeaderContent from './HeaderContent';

import './Home.scss'

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  return (
    <Layout>
      <Header className='header' style={{background: "linear-gradient(to bottom, #eeeeee, #cacaca)"}}><HeaderContent /></Header>
      <Layout>
        <Sider style={{background: "#f9f7f7"}}><Sidebar/></Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default Home