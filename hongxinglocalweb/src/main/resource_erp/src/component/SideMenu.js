import React, { Component } from 'react';
import  MenuDataSource from "./MenuDataSource";
import {Menu,Icon} from "antd";
import {Link} from "react-router-dom";

const {SubMenu} = Menu;
const  rootSubmenuKeys = [];
class SideMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            openKeys: [],
        };
        for(let i= 0;i<MenuDataSource.length;i++){
            rootSubmenuKeys[i] = MenuDataSource[i].key;
        }
    }

    componentDidMount() {
        console.log("------------组装菜单----------------------------------");
        console.log(this.props.user);
        console.log("-------------------------------------------------");
    }


    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu mode="inline"
                  theme={this.props.theme}
                  // openKeys={this.state.openKeys}
                  // onOpenChange={this.onOpenChange}
            >

                {this.props.user.map((valueOne,key)=>{
                    if(valueOne.desc.toString().length===3&&valueOne.path!==""&&valueOne.path!==null){
                        return(
                            <Menu.Item  key={valueOne.desc}>
                                <Link to={valueOne.path}>
                                    <Icon type = {valueOne.img}/>
                                    <span>{valueOne.name}</span>
                                </Link>
                            </Menu.Item>
                        )
                    }else if(valueOne.desc.toString().length===3&&(valueOne.path===""||valueOne.path===null)){
                    return (
                        <SubMenu key={valueOne.desc}
                                 title={
                                     <span>
                                            <Icon type = {valueOne.img}/>
                                            <span>{valueOne.name}</span>
                                     </span>
                                 }>
                            {this.props.user.map((valueTwo,key)=>{
                                 if(valueTwo.desc.substr(0,3)===valueOne.desc.toString()&&valueTwo.desc.length>3){
                                     return(
                                             <Menu.Item  key={valueTwo.desc}>
                                                 <Link to={valueTwo.path}>
                                                     <Icon type = {valueTwo.img}/>
                                                     {valueTwo.name}
                                                 </Link>
                                             </Menu.Item>
                                     )
                                 }
                            })
                            }
                        </SubMenu>
                    )
                    }
                })}

            </Menu>
        )
    };
}

export default SideMenu;
