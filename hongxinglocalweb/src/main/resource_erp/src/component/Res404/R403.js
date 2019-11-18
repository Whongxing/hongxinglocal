import React, { Component } from 'react';
import { Result, Button } from 'antd';
class R403 extends Component{
    goHome=()=>{

    }
    render() {
        return (
            <Result

                status="403"
                title="403"
                subTitle="对不起，您没有权限，请联系管理员！."
                extra={<Button type="primary" onClick={this.goHome()}>回首页</Button>}
            />
        )
    };
}

export default R403;
