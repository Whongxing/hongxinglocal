import React, { Component } from 'react';
import { Table,Tooltip,Icon,Tree,
Row,Col,Card} from 'antd';
import '../../static/css/App.css';


const { TreeNode } = Tree;
class SysMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            columns : [
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '图标',
                    dataIndex: 'img',
                    key: 'img',
                },
                {
                    title: '菜单名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '路径',
                    key: 'path',
                    dataIndex: 'path',
                },
                {
                    title: '描述',
                    key: 'desc',
                    dataIndex: 'desc',

                },
                {
                    title: '父级菜单',
                    key: 'parent',
                    dataIndex: 'parent',

                },
                {
                    title: '状态',
                    key: 'status',
                    dataIndex: 'status',

                },
                {
                    title: '操作',
                    key: 'action',
                    dataIndex: 'action',
                    render:(text,record)=>(
                        <span
                            key="0"
                            className="control-button"
                        >
                             <Tooltip placement="top" title="修改">
                                    <Icon type="edit" style={{color:'Green'}}/>
                                </Tooltip>
                       </span>
                    )
                },
            ],
            data : [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ],
        }

    }
    componentWillMount() {

    }


    render() {
        return (
            <div>
                <Row>
                    <Col className="gutter-row"  span={5}>
                        <Card  style={{width:'110%'}}>
                        目录结构<br/><hr/>
                        <Tree
                            showIcon
                            defaultExpandAll
                            bordered
                            defaultSelectedKeys={['0-0']}
                            switcherIcon={<Icon type="down" />}
                        >
                            <TreeNode icon={<Icon type="smile-o" />} title="根目录" key="0-0">
                                <TreeNode icon={<Icon type="meh-o" />} title="首页" key="0-0-0" />
                                <TreeNode
                                    icon={({ selected }) => <Icon type={selected ? 'frown' : 'frown-o'} />}
                                    title="权限管理"
                                    key="0-0-1"
                                />
                            </TreeNode>
                        </Tree>
                         </Card>
                    </Col>
                    <Col className="gutter-row" span={18} offset={1}>
                        <Card>
                        <Table columns={this.state.columns} dataSource={this.state.data} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    };
}

export default SysMenu;
