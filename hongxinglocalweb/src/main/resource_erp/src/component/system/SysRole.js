import React, { Component } from 'react';
import { Table,Tag,Divider,Tooltip,Icon,Avatar,Button } from 'antd';
import  "../../static/css/App.css"

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
                    render:(text)=> {
                        text = text===1?"cadetblue":"";
                        return(
                            <div>
                                 <Avatar size={26} style={{backgroundColor:text}} icon="user"/>
                            </div>
                        )
                    }
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
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    align:'center',
                    render: tags => (
                        <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
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
                                <Tooltip placement="top" title="分配权限">
                                  <Icon type="crown" style={{color:'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                        controls.push(
                            <span
                                key="3"
                                className="control-button"

                            >
                                <Tooltip placement="top" title="删除">
                                  <Icon type="delete" style={{color:'red'}}/>
                                </Tooltip>
                              </span>
                        );
                        return controls;
                    }
                },
            ],
            data: [
                {
                    key: '1',
                    role_id: 1,
                    role_name: '超级管理员',
                    role_remark: '终极权限，所有菜单权限',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    role_id: 2,
                    role_name: '普通用户',
                    role_remark: '没有管理菜单的权限',
                    tags: ['loser'],
                },
            ],
        }
    }
    render(){
        return (
            <div>
                <Button type="primary" icon="plus-circle">添加角色</Button>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    };
}

export default SysRole;
