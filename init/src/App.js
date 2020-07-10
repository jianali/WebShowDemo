import React from 'react';
import logo from './logo.svg';
import './App.css';

//加入antd样式及控件
import { Button, DatePicker, version, Divider, Slider } from 'antd'
import 'antd/dist/antd.css'
import { Card } from 'antd'

//使用栅格系统布局
import { Row, Col } from 'antd'
//页面布局
import { Layout } from 'antd'
//引入子组件
import ChildComponent from './ChildComponent.jsx'
import BasicLayout from './BasicLayout.jsx'



function App() {

  const style = {background: '#0092ff', padding:'8px 0'};
  const style1 =  {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };

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

      {/* //测试子组件、自定义组件，并且测试传参等功能 ,组件内部的状态记录在props上，组件的外部状态记录在this.state上*/}
      <ChildComponent name="lijian" onClick={(e)=>{alert("这是一个受控组件From parent component")}}>
        <div>111222333</div>
      </ChildComponent>

      {/* 修改受控组件中的value值 */}


      {/* // 使用路由实现单页面应用 */}
      <Card style={style1} className='card' actions={[<a>操作1</a>,<a>操作2</a>]}></Card>

      <br></br>
      <BasicLayout></BasicLayout>

      </div>
    </div>

    

  );
}

export default App;
