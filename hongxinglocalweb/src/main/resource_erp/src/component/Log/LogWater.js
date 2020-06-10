import React, { Component } from 'react';
import {Popover, Icon, Table,Popconfirm,
    Tag, Form, message, Spin, Button,
    Input,Select} from "antd";
import  ReactJson  from 'react-json-view';
import '../../static/css/App.css';
import * as config from "../../mock/config";
const { Option } = Select;

class LogWater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            columns:[
                {
                    title: '操作人',
                    dataIndex: 'log_name',
                    key: 'name',
                    align:'center',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '描述',
                    key: 'desc',
                    dataIndex: 'log_desc',
                    align:'center',
                },
                {
                    title: '关键字',
                    key: 'type',
                    dataIndex: 'log_type',
                    align:'center',
                    render:(text)=>{
                        let color = text==="UPDATE"?"red":"green"
                        return <Tag color={color}>
                                     {text}
                                </Tag>
                    }
                },
                {
                    title: '操作时间',
                    key: 'date',
                    dataIndex: 'log_date',
                    align:'center',
                    render:(text)=>{
                        let d = new Date(text);
                        let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
                        let day = d.getDate()<10 ? '0'+d.getDate(): d.getDate();
                        let hours = d.getHours()<10 ? '0'+d.getHours(): d.getHours();
                        let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
                        let sec = d.getSeconds()<10 ? '0'+d.getSeconds() : d.getSeconds();
                        let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' +sec;
                        return (
                            <div>
                                {times}
                            </div>
                        )
                    },
                },
                {
                    title: '操作的数据',
                    key: 'data',
                    dataIndex: 'log_data',
                    align:'center',
                    render:(text)=>{
                        const  content = (
                            <div>
                                <ReactJson  src={JSON.parse(text)}
                                            displayDataTypes={false}>
                                </ReactJson>
                            </div>
                        );
                        return (<Popover className = "control-button" title="操作的数据"  content={content}>
                              <Icon  type="eye"   style={{color:"cadetblue", fontSize:14}}/>
                              </Popover>)
                    }
                }
            ],
            data: [
            ],
        }
    }

   componentDidMount() {
        this.getData();
   }

    getData=()=>{
        let url = config.baseUrl+"/Api/allLog";
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
                    data:responseJson,
                    loading:false
                })
            }).catch(function (e) {
            message.error("网络错误");
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Form layout="inline" >
                    <Form.Item>
                        条件检索：
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('log_name')(
                            <Input placeholder="操作人" allowClear/>)}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('log_Type')(
                            <Select placeholder="操作类型" style={{ width: 120 }} allowClear >
                                <Option value="jack">增加</Option>
                                <Option value="lucy">修改</Option>
                                <Option value="Yiminghe">删除</Option>
                            </Select>)}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon="search">
                            搜索
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Popconfirm
                            title="警告，这将删除所用日志，是否继续?"
                            // onConfirm={confirm}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary" icon="delete">清理日志</Button>
                        </Popconfirm>
                    </Form.Item>
                </Form>

                <Spin size="large" spinning={this.state.loading}>
                    <Table
                         columns={this.state.columns}
                         dataSource={this.state.data}
                         pagination={
                             {
                                 defaultPageSize:'7',
                                 showSizeChanger:true,
                             }
                         }
                    />
                </Spin>
            </div>
        )}
}
LogWater = Form.create({})(LogWater);
export  default   LogWater;