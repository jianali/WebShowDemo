import React from 'react'

class ChildComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:null,
            age:18,
        };
    }

    // 测试生命周期函数

    //组件挂载后自动调用
    componentDidMount(){
    }
    //组件卸载前自动调用
    componentWillUnmount(){
    }
    //每次UI更新后自动调用
    componentDidMount(){
    }
    //props或者state有变化的时候会调用该方法
    shouldComponentUpdate(){

    }
    //等等组件

    // 受控组件的默认值及默认函数
    handleClick = (e)=>{
        alert("这是一个受控组件")
    }

    render(){

        return(
            <div>
             testChildComponent
             {this.props.children}
             {this.props.name}

            
             {/* 组件内部状态的改变 */}
            status中的年龄age为：{this.state.age}
            <br></br>
             <button onClick={()=>{this.setState({age:10})}}>改变年龄</button>
             
             
             <br></br>
             {/* 如何变成一个受控组件？？？ */}
             受控组件输入参数：<input value={this.state.value} onClick={this.handleClick}></input>


            </div>
        )
    }

}

// const ChildComponent = (props) =>{
//     return (
//         <div>
//             testChildComponent
//             {props.children}
//             {props.name}
//         </div>
//     )
// }

export default ChildComponent