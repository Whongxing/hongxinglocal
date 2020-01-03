import React, { Component } from 'react';
import {Button, Divider, Input, Table} from "antd";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
class TableOne extends Component{


    render() {
        return (
            <div>
                <div  className="option_select">
                    条件检索：&nbsp;&nbsp;&nbsp;&nbsp;
                    <Input placeholder="图片名称"/>

                    <Divider type='vertical'/>
                    <Button type="primary" icon="search"
                    >搜索
                    </Button>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />,
            </div>
        )
    };
}

export default TableOne;
