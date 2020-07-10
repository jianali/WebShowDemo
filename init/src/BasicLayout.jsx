import React from 'react'
import { Layout } from 'antd'

const { Header ,Footer,Sider,Content} = Layout;

export default class BasicLayout extends React.Component{
    constructor(props){
        super(props);

    }

    

    render(){
        return(
            // 测试布局
            <Layout>
                <Sider width={256} style={{minHeight:'100vh',color:'white'}}>Sider</Sider>
                <Layout>
                <Header style={{background:'#fff',textAlign:'center',padding:0}}>header</Header>
                <Content style={{margin:'24px 16px 0'}}>
                    <div style={{ padding:24,background:'#fff',minHeight:360}}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}