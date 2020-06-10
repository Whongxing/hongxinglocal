import React, { Component } from 'react';
import {Table, Input, Button, Icon, message, Radio,Tooltip, Popconfirm} from 'antd';
import Highlighter from 'react-highlight-words';
import * as config from "../../mock/config";
import   ExportJsonExcel   from    'js-export-excel';


class TableThree extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            remark_value:0,
            remark_log:'',
            columns :[
                {
                    title: '文件名',
                    dataIndex: 'file_name',
                    key: 'name',
                    align:'center',
                    ...this.getColumnSearchProps('file_name'),
                },
                {
                    title: '图片预处理切割数',
                    dataIndex: 'words_result_num',
                    key: 'num',
                    align:'center',
                    ...this.getColumnSearchProps('words_result_num'),
                },
                {
                    title: '识别编号',
                    dataIndex: 'log_id',
                    key: 'logid',
                    ...this.getColumnSearchProps('log_id'),
                },
                {
                    title: '识别结果',
                    dataIndex: 'words_result',
                    key: 'result',
                    width:'20%',
                    align:'center'
                },
                {
                    title: '数据产生日期',
                    dataIndex: 'c_date',
                    key: 'date',
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
                    // ...this.getColumnSearchProps('c_date'),
                },
                {
                    title: '操作人',
                    dataIndex: 'f_user',
                    key: 'user',
                    ...this.getColumnSearchProps('f_user'),
                },
            ]
        }
    }

    componentDidMount() {
        this.getData();
    }


    getData=()=>{
        let url = config.baseUrl+"/Ocrapi/selectWater";
        let props = {
            tf_status : -1,
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
                console.log(responseJson.data);
                this.setState({
                        data:responseJson.data,
                    }
                )
            }).catch(function (e) {
            message.error("网络错误");
        });
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    筛选
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    清理筛选
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    downloadExcel = () => {
        var option={};
        option.fileName = '不正确数据导出表'
        option.datas=[
            {
                //这里存放的是我们刚才格式化后的json数组
                sheetData:this.state.data,
                sheetName:'sheet',
                //这里的名字要和属性名对应上，如j.data  j.useNumber
                sheetFilter:['file_name','words_result_num','','words_result'],
                //自定义每一列的名称
                sheetHeader:['图片名','图片预处理切割数',"识别结果"],
            }
        ];
        var toExcel = new ExportJsonExcel(option);
        //自动导出o'k
        toExcel.saveExcel();
    }

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        return (
            <div>
            <Button type="primary" icon="vertical-align-bottom"  onClick={()=>this.downloadExcel()}>
                导出数据
            </Button>
            <Table columns={this.state.columns} dataSource={this.state.data}
            />
            </div>
        );
    }
}

export default TableThree;
