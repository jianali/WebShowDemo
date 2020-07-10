import React from 'react';
import logo from './logo.svg';
import './App.css';

//加入antd样式及控件
import { Button, DatePicker, version, Divider } from 'antd'
import 'antd/dist/antd.css'

//使用栅格系统布局
import { Row, Col } from 'antd'
//页面布局
import { Layout } from 'antd'



function App() {

  const style = {background: '#0092ff', padding:'8px 0'};
  const { Header ,Footer,Sider,Content} = Layout;
  return (
    <div className="App">
      <div className="space-align-container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>antd version is:{version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      {/* 使用layout进行大组件的布局 */}
      <Layout>
          <header>Header</header>
          <Layout>
            <Sider>Silder</Sider>
            <Content>
                {/* 使用栅格系统来进行小组件的布局 */}
                <Row>
                  <Col span={24} style={style}>col</Col>
                </Row>
                <Divider></Divider>
                <Row>
                  <Col span={12} style={style}>col</Col>
                </Row>
                <Row>
                  <Col span={6} offset={3} className="col_style">col</Col>
                </Row>
            </Content>
          </Layout>
      </Layout>
      </div>
    </div>
  );
}

export default App;
