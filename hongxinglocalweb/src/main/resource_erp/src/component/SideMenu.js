import React, { Component } from 'react';
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
        for(let i= 0;i<this.props.menu.length;i++){
            if(this.props.menu[i].desc.toString().length===3)
            rootSubmenuKeys[i] = this.props.menu[i].desc;
        }
    }

    componentDidMount() {
        console.log("---------------------组装菜单-------------------------");
        console.log(this.props.menu);
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
                  openKeys={this.state.openKeys}
                  onOpenChange={this.onOpenChange}
            >

                {this.props.menu.map((valueOne,key)=>{
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
                            {this.props.menu.map((valueTwo,key)=>{
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
