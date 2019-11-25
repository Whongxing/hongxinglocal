import React, { Component } from 'react';
import {Avatar,Input, Button, Divider,
    Icon, Table, Tag, Tooltip} from "antd";

class SysUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns:[
                {
                    title: '用户名',
                    dataIndex: 'user_name',
                    key: 'name',
                    align:'center',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '别名',
                    dataIndex: 'nick_name',
                    key: 'nick',
                    align:'center',
                },
                {
                    title: '角色',
                    key: 'role',
                    dataIndex: 'roles',
                    align:'center',
                    render: tags => (
                        <span>
                        {tags.map(tag => {
                            let color = tag==='超级管理员' ? 'volcano' : 'green';
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                      </span>
                    ),
                },
                {
                    title: '手机号',
                    key: 'iphone',
                    dataIndex: 'user_iphone',
                    align:'center',
                },
                {
                    title: '创建时间',
                    key: 'data',
                    dataIndex: 'user_create',
                    align:'center',
                },
                {
                    title: '状态',
                    key: 'status',
                    dataIndex: 'user_status',
                    align:'center',
                    render:text=>{
                        if(text===1){
                            return (<span  style={{color:"green"}}>启用</span>);
                        }else  if(text===0){
                            return  (<span  style={{color:"red"}}>禁用</span>);
                        }else{
                            return  (<span  style={{color:"black"}}>已锁定</span>);
                        }
                    }

                },
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
                                  <Icon type="eye" style={{color:'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                        controls.push(
                            <span
                                key="1"
                                className="control-button"

                            >
                                <Tooltip placement="top" title="修改">
                                  <Icon type="form" style={{color:'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                        controls.push(
                            <span
                                key="2"
                                className="control-button"

                            >
                                <Tooltip placement="top" title="分配角色">
                                  <Icon type="crown" style={{color:'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                        if(record.user_name!=="admin") {
                            controls.push(
                                <span
                                    key="3"
                                    className="control-button"

                                >
                                <Tooltip placement="top" title="删除">
                                  <Icon type="delete" style={{color: 'red'}}/>
                                </Tooltip>
                              </span>
                            );
                        }
                        return controls;
                    }
                },
            ],
            data: [
                {
                    key: '1',
                    role_id: 1,
                    user_name: 'admin',
                    nick_name: '王红星',
                    user_create:'0000-00-00 00:00:00',
                    user_iphone:'13188795423',
                    user_status:1,
                    roles: ['超级管理员', '普通用户'],
                },
                {
                    key: '2',
                    user_name: 'www',
                    nick_name: '权限测试人员',
                    role_remark: '没有管理菜单的权限',
                    user_create:'0000-00-00 00:00:00',
                    user_iphone:'13188795423',
                    user_status:0,
                    roles: ['普通用户'],
                },
                {
                    key: '3',
                    user_name: 'test',
                    nick_name: '权限测试人员',
                    role_remark: '没有权限',
                    user_create:'0000-00-00 00:00:00',
                    user_iphone:'13188795423',
                    user_status:2,
                    roles: ['普通用户'],
                },
            ],
        }
    }
    render(){
        return (
            <div>
                <Button type="primary" icon="plus-circle">添加用户</Button>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    };
}

export default SysUser;
