import React, { Component } from 'react';
import { Layout, Menu, Icon,Dropdown,
    Avatar,Switch,Popover, Radio ,
    ConfigProvider,} from 'antd';
import './static/css/App.css';
import avatar from './static/images/people.jpg'
import  Routes from "./routes/Config.js";
import {Link,Route,Redirect} from "react-router-dom";
import {fakeAuth} from './routes/PrivateRoute';
import SideMenu  from './component/SideMenu';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Station from "./component/Station";
import Home from "./component/Home";
import Login from "./Login";


moment.locale('zh_ch');

const { Header, Content, Footer, Sider } = Layout;

class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            collapsed: false,  //判断菜单初始是否隐藏
            theme: 'light' ,   //边框默认黑色(true)
            radio:1,             //国际化按钮
            locale: zhCN,       //国际化
        };

    }

    componentDidMount() {
        console.log(this.props);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    //切换路由时后触发
    onEnter(Component, props) {
        console.log(props);
        // if (props.location.pathname!=='/') {
            return <Component {...props} />;
        // }
        // return <Redirect to="/Response/R403" />;
    }

    //退出清除token
    cleanToken=()=>{
        fakeAuth.signout();
    }
    //改变side颜色
    changeTheme=value=>{
        console.log(value);
        this.setState({
            theme: value ? 'dark' : 'light',
        });
        console.log(this.state.theme);
    }

    changeLanguage = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            radio:e.target.value,
            locale: e.target.value===1?zhCN:enUS,
        });
    };

    render() {
        const { locale } = this.state;
        const content = (
            <div>
                <Switch checkedChildren="浅"
                        unCheckedChildren="深"
                        checked={this.state.theme === 'dark'}
                        onClick={this.changeTheme}
                /><br/><hr/>
                <Radio.Group onChange={this.changeLanguage} value={this.state.radio}>
                    <Radio value={1}>中文组件</Radio>
                    <Radio value={2}>EnglishComponent</Radio>
                </Radio.Group>
            </div>
        );

        //Header中的头像信息
        const menu = (
            <Menu style={{width:150}}>
                <Menu.Item key="0">
                    <Icon type="user"
                    /> {localStorage.getItem("token")}
                </Menu.Item>
                <Menu.Item key="1" >
                    <Link to="/login"  onClick={()=>this.cleanToken()}>
                        <Icon type="poweroff"
                        />  退出登录
                    </Link>
                </Menu.Item>
            </Menu>
        );
        return (
            <ConfigProvider locale={locale}>
                <Layout  >
                    <Sider trigger={null}
                           collapsible
                           collapsed={this.state.collapsed}
                           style={{
                               overflow:'auto',
                               height:'100vh',
                           }}
                           theme={this.state.theme}
                    >
                        <div className="logo" />
                        <SideMenu  theme={this.state.theme}/>
                    </Sider>
                    <Layout  style={{overflow:"auto", height:"100vh"}}>
                        <Header style={{ background: '#fff', padding: 0 }} >
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{
                                    fontSize:18,
                                    margin:"1.2% 0 0 1.5%"
                                }}/>
                            <span
                                className="control-button"
                            >
                                <Popover content={content} title="全局设置" overlayStyle={{width:170}} >
                                    <Icon type="setting" style={{margin:'0%  2%  0  86%'}}/>
                                </Popover>
                            </span>
                            <span
                                className="control-button"
                            >
                                <Dropdown overlay={menu} placement="bottomCenter" >
                                    <Avatar size={40}  src={avatar}/>
                                </Dropdown>
                            </span>
                        </Header>
                        <Station   location={this.props.location}/>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            {
                                Routes.map((value,key)=>{
                                    return <Route key={key}  exact path={value.path}
                                                  render={props => this.onEnter(value.component, props)}

                                    />

                                })}
                            {/*</Switch>*/}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>admin ©2019 Created by WangHongxing</Footer>
                    </Layout>
                </Layout>
            </ConfigProvider>
        );
    }
}


export default App;
