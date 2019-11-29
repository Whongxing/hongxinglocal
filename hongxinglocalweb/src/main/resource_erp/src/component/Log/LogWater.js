import React, { Component } from 'react';
import {Popover, Icon, Table, Tag, Tooltip, message} from "antd";
import  ReactJson  from 'react-json-view';
import '../../static/css/App.css';
import * as config from "../../mock/config";

class LogWater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        let color = text==="UPDATE"||"DELETE"?"red":"cadetblue"
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
                        let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
                        let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
                        let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
                         let sec = d.getSeconds()<10 ? '0'+d.getSeconds() : d.getSeconds();
                        let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' +sec;
                        return (
                            <div>
                                {text}
                            </div>
                        )
                    }
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
                    data:responseJson
                })
            }).catch(function (e) {
            message.error("网络错误");
        });
    }


    render() {
        return(
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )}
}
export  default   LogWater;