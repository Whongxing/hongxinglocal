import React, { Component } from 'react';
import {
    Button,
    Form,
    Input,
    Icon,
    Card,
    message
} from 'antd';
import '../static/css/index.css';
import {fakeAuth} from '../routes/PrivateRoute';
import * as config from "../mock/config";


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            path:[],
            data:[],
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();
        let {history,location} = this.props;
        let { from } = location.state || { from: { pathname: "/" } };
         this.props.form.validateFields((err,values)=>{
             if(!err){
                 // fakeAuth.authenticate(() => {
                 //     console.log(values);
                 //     localStorage.setItem("token",values.username);
                 //     history.replace(from);
                 // });
                console.log("Received values of form");

                 let url = config.baseUrl+"/Log/loginUser";
                 let props = {
                     username:values.username,
                     password:values.password,
                 };
                 let fetchOption = {
                     method: 'POST',
                     headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
                     mode:'cors',
                     body: JSON.stringify(props)
                 }

                 fetch(url, fetchOption)
                     .then(response => response.json())
                     .then(responseJson => {
                         console.log(responseJson);
                         if(responseJson.path.length!==0&&responseJson.data.length!==0) {
                             this.state.path = responseJson.path;
                             this.state.data = responseJson.data;
                             fakeAuth.authenticate(() => {
                                 console.log(values);
                                 localStorage.setItem("token", values.username);
                                 history.replace(from);
                             });
                         }else{
                             message.error("用户名密码不正确");
                         }
                     }).catch(function (e) {
                     message.error("网络错误");
                 });

             }
         });
        };


  render() {
    const { getFieldDecorator } = this.props.form;
      return (
        <div  className="login_bg">
            <div className="login_bg_a"> </div>
            <Card
                className="logo-Card-Style"
                style={{marginLeft:'37%'}}
                >
             <div className='login-logo'>
                <Icon type="twitter"  spin  style={{fontSize:'25px'}}/>
                React-Admin
             </div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="admin"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码！' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="111111"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary"  onClick={this.handleSubmit}
                            className="login-form-button"
                            icon="unlock"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </div>
    );
  }
}
Login = Form.create({})(Login);

export default Login;
