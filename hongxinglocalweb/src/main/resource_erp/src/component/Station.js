import React, { Component } from 'react';
import {Breadcrumb,Icon,Tag} from "antd";
import '../static/css/App.css';

class Station extends Component{
    constructor(props){
        super(props);

    }
    componentWillMount() {
        console.log("waf");
        //console.log(this.props);
    }

    render() {
        return (
            <div className="Breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon  type="environment" style={{color:'cadetblue'}}/>&nbsp;欢迎**{localStorage.getItem('user')}用户登录ＯＣR管理系统！{this.props.children}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    };
}

export default Station;
