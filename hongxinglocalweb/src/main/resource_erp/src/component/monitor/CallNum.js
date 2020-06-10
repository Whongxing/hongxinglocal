import React, { Component } from 'react';
import ReactEcharts  from "echarts-for-react";
import * as config from "../../mock/config";
import {message} from "antd";

var date = new Date();
var seperator1 = "-";  //-用来格式化时间如2019-01
var year = date.getFullYear();
var month = date.getMonth() + 1;
var strDate = date.getDate();
if (month >= 1 && month <= 9) {  //格式化月份，将拿到的 1 格式化为 01
    month = "0" + month;
}
if (strDate >= 0 && strDate <= 9) {  //格式化日期，将拿到的 1 格式化为 01
    strDate = "0" + strDate;
}
var currentdate = year + seperator1 + month + seperator1 + strDate + "  23:59:59";


var dateTime1=new Date();
dateTime1=dateTime1.setDate(dateTime1.getDate()-6); //获得时间7天前
dateTime1=new Date(dateTime1);
var seperator2 = "-";
var year1 = dateTime1.getFullYear();
var month1 = dateTime1.getMonth() + 1;
var strDate1 = dateTime1.getDate();
if (month1 >= 1 && month1 <= 9) {
    month1 = "0" + month1;
}
if (strDate1 >= 0 && strDate1 <= 9) {
    strDate1 = "0" + strDate1;
}
var currentdate1 = year1 + seperator2 + month1 + seperator2 + strDate1+ "  00:00:00";
// const option ={
//     title: {
//         text: '最近一周OCR接口调用信息统计表'
//     },
//     tooltip: {
//         trigger: 'axis',
//             axisPointer: {
//             type: 'cross',
//                 label: {
//                 backgroundColor: '#6a7985'
//             }
//         }
//     },
//     xAxis: {
//         type: 'category',
//             boundaryGap: false,
//             data:[2,3,4,5,6,7,78],
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [1,4,6,76,7,89,0],
//         type: 'line',
//         areaStyle: {}
//     }]
// }

class CallNum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option:{},

        }
    }

    componentDidMount(){
        this.getData();
    }
    getData=()=>{
            let url = config.baseUrl+"/Monitor/selectDay";
            let params = {
               end_date : currentdate,
               start_date: currentdate1
            };
            let fetchOption = {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
                mode:'cors',
                body: JSON.stringify(params)
            }
            fetch(url, fetchOption)
                .then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson.data);
                    this.setState({
                        option : {
                            title: {
                                text: '最近一周OCR接口调用信息统计表'
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    label: {
                                        backgroundColor: '#6a7985'
                                    }
                                }
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: responseJson.data.y,
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: responseJson.data.x,
                                type: 'line',
                                areaStyle: {}
                            }]
                        }
                    })
                }).catch(function (e) {
                message.error("网络错误");
            });
        }
    render(){
        return (
            <ReactEcharts option={this.state.option}
                          style={{height:'95%'}}
            />
        )
   }
}
export default CallNum;
