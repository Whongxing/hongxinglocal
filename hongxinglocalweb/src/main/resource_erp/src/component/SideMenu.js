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

    componentWillMount() {
        console.log(this.props.path);
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
                  openKeys={this.state.openKeys}
                  onOpenChange={this.onOpenChange}
            >
                {
                    MenuDataSource.map((valueOne,key)=>{

                        if(valueOne.child!=null){
                            return (
                                <SubMenu key={valueOne.key}
                                    title={
                                            <span>
                                                <Icon type = {valueOne.img}/>
                                                <span>{valueOne.name}</span>
                                            </span>
                                        }>

                                     {
                                         valueOne.child.map((valueTwo,key)=>{
                                             return(
                                               <Menu.Item  key={valueTwo.url}>
                                                   <Link to={valueTwo.url}>
                                                       <Icon type = {valueTwo.img}/>
                                                       {valueTwo.childName}
                                                   </Link>
                                               </Menu.Item>
                                           )
                                       })
                                     }
                                </SubMenu>
                            )}else{
                                return (
                                    <Menu.Item key={valueOne.url}>
                                        <Link to={valueOne.url}>
                                            <Icon type = {valueOne.img}/>
                                            <span>{valueOne.name}</span>
                                        </Link>
                                    </Menu.Item>
                                );
                             }
                    })
                }

            </Menu>
        )
    };
}

export default SideMenu;
