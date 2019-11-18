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


class Login extends Component{
    constructor(props){
        super(props);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let {history,location} = this.props;
        let { from } = location.state || { from: { pathname: "/" } };
         this.props.form.validateFields((err,values)=>{
             if(!err&&values.username==="admin"&&values.password==="111111"){
                console.log("Received values of form");
                fakeAuth.authenticate(() => {
                    localStorage.setItem("token","admin");
                    history.replace(from);
                });
             }else{
                 message.warning("用户名密码不正确");
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
