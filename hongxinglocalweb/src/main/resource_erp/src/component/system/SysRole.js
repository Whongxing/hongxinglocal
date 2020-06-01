import React, { Component } from 'react';
import {Table, Divider, Tooltip, Icon, Avatar, Button, Popconfirm, message} from 'antd';
// import  "../../static/css/App.css"
import MyRoleTree from "../util/MyRoleTree";
import * as config from "../../mock/config";

class SysRole extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns:[
                {
                    dataIndex: 'role_id',
                    key: 'id',
                    align:'center',
                    width:'2%',
                    render:(text,record)=> {
                        text = record.role_name==="超级管理员"?"cadetblue":"";
                        return(
                            <div>
                                 <Avatar size={28} style={{backgroundColor:text}} icon="user"/>
                            </div>
                        )
                    }
                },
                {
                    title: '序号',
                    dataIndex: 'key',
                    key: 'key',
                    align:'center',
                },
                {
                    title: '角色名',
                    dataIndex: 'role_name',
                    key: 'name',
                    align:'center',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '角色描述',
                    dataIndex: 'role_remark',
                    key: 'address',
                    align:'center',
                },
                {
                    title: '创建时间',
                    dataIndex: 'role_cdate',
                    key: 'cdate',
                    align:'center',
                },

                // {
                //     title: 'Tags',
                //     key: 'tags',
                //     dataIndex: 'tags',
                //     align:'center',
                //     render: tags => (
                //         <span>
                //         {tags.map(tag => {
                //             let color = tag.length > 5 ? 'geekblue' : 'green';
                //             if (tag === 'loser') {
                //                 color = 'volcano';
                //             }
                //             return (
                //                 <Tag color={color} key={tag}>
                //                     {tag.toUpperCase()}
                //                 </Tag>
                //             );
                //         })}
                //       </span>
                //     ),
                // },

                {
                    title: '操作',
                    key: 'action',
                    align:'center',
                    render: (text, record) => {
                        const controls = [];
                        controls.push(
                            <span
                                key="0"
                                className="control-button"

                            >
                                <Tooltip placement="top" title="查看">
                                  <Icon type="eye" style={{color: 'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                        if (record.role_name !== "超级管理员") {
                        controls.push(
                            <span
                                key="1"
                                className="control-button"

                            >
                                <Tooltip placement="top" title="修改">
                                  <Icon type="form" style={{color: 'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                        controls.push(
                            <span
                                key="2"
                                className="control-button"
                                onClick={() => this.RoleTree()}
                            >
                                <Tooltip placement="top" title="分配权限">
                                  <Icon type="crown" style={{color: 'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                            controls.push(
                                <span
                                    key="3"
                                    className="control-button"

                                >
                                  <Popconfirm
                                      title="警告,确认删除吗?"
                                      icon={<Icon type="question-circle-o" style={{color: 'red'}}/>}
                                      // onConfirm={confirm}
                                      // onCancel={cancel}
                                      okText="Yes"
                                      cancelText="No"
                                  >
                                        <Tooltip placement="top" title="删除">
                                          <Icon type="delete" style={{color: 'red'}}/>
                                        </Tooltip>
                                  </Popconfirm>
                              </span>
                            );
                        }
                            return controls;
                     }
                },
            ],
            data: [
            ],
        }
    }

    componentDidMount() {
        this.getData();
        this.getAllMenu();
    }


    getAllMenu=()=>{

    }
    getData=()=>{
        let url = config.baseUrl+"/SysRole/selectRole";
        let props = {
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
                this.setState({
                    data:responseJson.data,
                })
            }).catch(function (e) {
            message.error("网络错误");
        });
    }

    RoleTree=()=>{
        this.setState({
            visible:true,
        })
    }

    onClose=()=>{
        this.setState({
            visible:false,
        })
    }

    render(){
        return (
            <div>
                <Button type="primary" icon="plus-circle">添加角色</Button>
                <Table columns={this.state.columns} dataSource={this.state.data} />
                <MyRoleTree
                    visible={this.state.visible}
                    onClose={()=>this.onClose()}
                />
            </div>
        )
    };
}

export default SysRole;
