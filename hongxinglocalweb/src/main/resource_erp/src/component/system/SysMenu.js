import React, { Component } from 'react';
import { Table,Tooltip,Icon,Tree,
Row,Col,Card,message,Spin,Modal,Form,
Input,Radio } from 'antd';
import '../../static/css/App.css';
import * as config from "../../mock/config";


const { TreeNode } = Tree;
const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
};
class SysMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true, //加载动画
            treedata:null,//树查询数据参数
            visible:false, //Modle
            modalType:"up",
            data : [],
            columns : [
                {
                    title: '序号',
                    dataIndex: 'key',
                    key: 'key',
                },
                {
                    title: '图标',
                    dataIndex: 'img',
                    key: 'img',
                    render:(text,record)=>(
                        <Icon type={text}/>
                    )
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
                    render:(text)=>
                     text===1?(
                         <span style={{color:"green"}}>
                                启用
                         </span>
                     ):(
                         <span style={{color:"red"}}>
                                禁用
                         </span>
                     )
                },
                {
                    title: '操作',
                    key: 'action',
                    dataIndex: 'action',
                    render:(text,record)=>(
                        <span
                            key="0"
                            className="control-button"
                            onClick={()=>this.showModal(record,"up")}
                        >
                             <Tooltip placement="top" title="修改">
                                    <Icon type="edit" style={{color:'Green'}}/>
                             </Tooltip>
                       </span>
                    )
                },
            ],

        }

    }
    componentWillMount() {
        this.getData();
    }
    //打开弹框
    showModal = (data,type) => {
        const{form} = this.props;
       if(type==="up"){
           form.setFieldsValue({
               menu_name: data.name,
               menu_img:  data.img,
               menu_desc: data.desc,
               menu_status: data.status,
           })
       }
        this.setState({
            visible: true,
            modalType:type,
        });
    };
    //Modal
    handleOk(){
        const{form} = this.props;
        if(this.state.modalType==="up"){
            form.validateFields(
                [
                    "menu_name",
                    "menu_img",
                    "menu_desc",
                    "menu_status",
                ],
                (error, values) =>{
                    if(error) {
                        message.error("检查输入信息");
                        return false;
                    }
                    let url = config.baseUrl+"/Sys/updateMenuData";

                    let params ={
                        status:values.menu_status,
                        name :values.menu_name,
                    }
                    let fetchOption = {
                        method: 'POST',
                        headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
                        mode:'cors',
                        body: JSON.stringify(params)
                    }
                    fetch(url, fetchOption)
                        .then(response => response.json())
                        .then(responseJson => {
                           if(responseJson>=1){
                               this.getData();
                               this.setState({ visible: false,})
                               message.success("修改成功");
                           }else{
                               message.error(responseJson+"请求异常");
                           }

                        }
                   )
                }
            )
        }
    };
    //Modal
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    //树节点查找
    changeNode=e=>{
        this.state.treedata = e.toString();
        this.getData();
    }

    getData=()=>{
        let url = config.baseUrl+"/Sys/getMenuData";
        let props = {
            path:this.state.treedata
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
                        loading:false,
                    })
            }).catch(function (e) {
                message.error("网络错误");
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row>
                    <Col className="gutter-row"  span={5}>
                        <Card  style={{width:'110%'}}>
                        目录结构<br/><hr/>
                        <Tree
                            showIcon
                            bordered
                            defaultExpandedKeys={['#']}
                            defaultSelectedKeys={['0']}
                            switcherIcon={<Icon type="down" />}
                            onSelect={this.changeNode}
                        >
                            <TreeNode icon={<Icon type="smile-o" />} title="根目录" key="#">
                            <TreeNode icon={<Icon type="smile-o" />} title="首页" key="#/"/>
                                <TreeNode icon={<Icon type="smile-o" />} title="权限管理" key="#/system">
                                    {this.state.data.map((value,key)=>{
                                        if(value.path.toString().substr(0,8)==="#/system"&&value.path.toString().length>8){
                                            return <TreeNode disabled icon={<Icon type="smile-o" />}  title={value.name} key={value.path}/>
                                        }
                                    })
                                    }
                                </TreeNode>
                                <TreeNode icon={<Icon type="smile-o" />} title="报表查询" key="#/datatable">
                                    {this.state.data.map((value,key)=>{
                                        if(value.path.toString().substr(0,11)==="#/datatable"&&value.path.toString().length>11){
                                            return <TreeNode disabled icon={<Icon type="smile-o" />}  title={value.name} key={value.path}/>
                                        }
                                    })
                                    }
                                </TreeNode>
                            {/*{this.state.data.map((value,key)=>{*/}
                            {/*        if(value.path.toString().length===8||value.path.toString().length===11){*/}
                            {/*            return <TreeNode icon={<Icon type="smile-o" />} title={value.name} key={value.path}>*/}
                            {/*                  */}
                            {/*                   </TreeNode>*/}
                            {/*        }*/}
                            {/*})}*/}
                               {/*<TreeNode icon={<Icon type="smile-o" />} title="权限管理" key="#/system">*/}
                               {/*     <TreeNode disabled icon={<Icon type="smile-o" />} title="用户管理" key="#/system/User"/>*/}
                               {/*     <TreeNode disabled icon={<Icon type="smile-o" />} title="角色管理" key="#/system/Role"/>*/}
                               {/*     <TreeNode disabled icon={<Icon type="smile-o" />} title="菜单管理" key="#/system/Menu"/>*/}
                               {/* </TreeNode>*/}
                               {/* <TreeNode icon={<Icon type="smile-o" />} title="报表查询" key="#/datatable">*/}
                               {/*     <TreeNode disabled icon={<Icon type="smile-o" />} title="记录" key="#/datatable/TableOne"/>*/}
                               {/* </TreeNode>*/}
                            </TreeNode>
                        </Tree>
                     </Card>
                    </Col>
                    <Col className="gutter-row" span={18} offset={1}>
                        <Spin size="large" spinning={this.state.loading}>
                            <Card>
                            <Table columns={this.state.columns}
                                   dataSource={this.state.data}
                                    pagination={
                                        {
                                            pageSize:6
                                        }
                                    }
                            />
                            </Card>
                        </Spin>
                    </Col>
                </Row>

                <Modal
                    title={
                        {add: "新增", up: "修改信息", see: "查看"}[this.state.modalType]
                    }
                    visible={this.state.visible}
                    onOk={()=>this.handleOk()}
                    onCancel={()=>this.handleCancel()}
                >
                    <Form.Item {...formItemLayout} label="菜单名称">
                        {getFieldDecorator('menu_name', {
                            rules: [
                                {
                                    required: true,
                                    message: '菜单名称必须填写',
                                },
                            ],
                        })(<Input placeholder="菜单名称"
                                  disabled={this.state.modalType==="up"}
                        />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="菜单图标">
                        {getFieldDecorator('menu_img', {

                        })(<Input placeholder="菜单的图标编码"
                                  disabled={this.state.modalType==="up"}
                        />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="菜单描述">
                        {getFieldDecorator('menu_desc', {
                            rules: [
                                {
                                    required: true,
                                    message: '菜单描述必须填写',
                                },
                            ],
                        })(<Input placeholder="菜单描述"
                                    disabled={this.state.modalType==="up"}
                        />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="菜单状态">
                        {getFieldDecorator('menu_status', {
                            rules: [
                                {
                                    required: true,
                                    message: '菜单状态必须选择',
                                },
                            ],
                        })( <Radio.Group  style={{marginLeft:'15%'}}>
                                <Radio value={1}>启用</Radio>
                                <Radio value={0}>禁用</Radio>
                             </Radio.Group>)}
                    </Form.Item>

                </Modal>
            </div>
        )
    };
}

SysMenu = Form.create({})(SysMenu);
export default SysMenu;
