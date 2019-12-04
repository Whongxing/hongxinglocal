import React, { Component } from 'react';
import {
    Button, Divider, Form,
    Icon, Input, message, Modal,
    Popconfirm, Radio, Table, Tag, Tooltip, Spin
} from "antd";
import  MyRoleTree  from  '../util/MyRoleTree'
import * as config from "../../mock/config";
import '../../static/css/App.css'


const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
};
class SysUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            modalVisible:false,
            visible:false,
            modalType:"up",//modal的title
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
                    dataIndex: 'user_nick',
                    key: 'nick',
                    align:'center',
                    render: (text, record) => {
                      let color =   record.key%2===0?"red":"green";
                        return (
                            <Tag color={color}>
                                {text}
                            </Tag>
                        );
                    }
                },
                {
                    title: '手机号',
                    key: 'phone',
                    dataIndex: 'user_phone',
                    align:'center',
                },
                {
                    title: '创建时间',
                    key: 'date',
                    dataIndex: 'user_date',
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
                                onClick={()=>this.handleOk(record,"see")}
                            >
                                <Tooltip placement="top" title="查看">
                                  <Icon type="eye" style={{color:'cadetblue'}}/>
                                </Tooltip>
                                <Divider type="vertical"/>
                              </span>
                        );
                        if(record.user_name!=="admin") {
                        controls.push(
                            <span
                                key="1"
                                className="control-button"
                                onClick={()=>this.handleOk(record,"up")}
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
                                onClick={()=>this.RoleTree()}
                            >
                                <Tooltip placement="top" title="分配角色">
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
                                  <Popconfirm
                                      title="警告,确认删除吗?"
                                      icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
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
    }

    getData=()=>{
        let url = config.baseUrl+"/Sys/getAllUser";
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
                    loading:false,
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

    handleOk=(data,type)=> {
        const {form} = this.props;
        if (type === "add") {
            form.resetFields();
        } else {
            form.setFieldsValue({
                user_name:data.user_name,
                user_nick:data.user_nick,
                user_phone:data.user_phone,
                user_status:data.user_status,
            })
        }
        this.setState({
            modalVisible: true,
            modalType: type,
        })
      }

    onClose=()=>{
        this.setState({
            visible:false,
            modalVisible:false,
        })
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div  className="option_select">
                    条件检索：&nbsp;&nbsp;&nbsp;&nbsp;
                    <Input placeholder="用户名称"/>

                    <Divider type='vertical'/>
                    <Button type="primary" icon="search"
                            >搜索
                    </Button>

                    <Divider type='vertical'/>
                    <Button type="primary" icon="plus-circle"
                            onClick={()=>this.handleOk(null,"add")}>添加用户
                    </Button>
                </div>

                <Spin size="large" spinning={this.state.loading}>
                    <Table columns={this.state.columns} dataSource={this.state.data} />
                </Spin>
                <Modal
                    title={
                        {add: "新增", up: "修改信息", see: "查看"}[this.state.modalType]
                    }
                    visible={this.state.modalVisible}
                    onOk={()=>this.onClose()}
                    onCancel={()=>this.onClose()}
                >
                    <Form.Item {...formItemLayout} label="用户名称">
                        {getFieldDecorator('user_name', {
                            rules: [
                                {
                                    required: true,
                                    message: '用户名称必须填写',
                                },
                            ],
                        })(<Input placeholder="用户名称"
                                  disabled={this.state.modalType==="up"||this.state.modalType==="see"}
                        />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="用户别名">
                        {getFieldDecorator('user_nick', {

                        })(<Input placeholder="用户别名"
                                  disabled={this.state.modalType==="see"}
                        />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="用户密码">
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '用户密码必须填写',
                                },]
                        })(<Input placeholder="密码"
                                  type="password"
                                  disabled={this.state.modalType==="up"||this.state.modalType==="see"}
                        />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="手机号：">
                        {getFieldDecorator('user_phone', {

                        })(<Input placeholder="用户手机号"
                                  disabled={this.state.modalType==="see"}
                        />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="用户状态">
                        {getFieldDecorator('user_status', {
                            rules: [
                                {
                                    required: true,
                                    message: '用户状态必须选择',
                                },
                            ],
                        })( <Radio.Group  style={{marginLeft:'15%'}}
                                          disabled={this.state.modalType==="see"}>
                            <Radio value={1}>启用</Radio>
                            <Radio value={0}>禁用</Radio>
                            <Radio value={-1} disabled>已锁定</Radio>
                        </Radio.Group>)}
                    </Form.Item>

                </Modal>

                <MyRoleTree
                  visible={this.state.visible}
                  onClose={()=>this.onClose()}
                />
            </div>
        )
    };
}

SysUser = Form.create({})(SysUser);
export default SysUser;
