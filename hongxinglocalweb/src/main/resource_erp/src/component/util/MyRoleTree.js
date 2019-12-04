import React, { Component } from 'react';
import { Modal,Checkbox} from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['超级管理员', '普通用户', '游客'];

class MyRoleTree extends Component{

    constructor(props){
        super(props);
    }


    onClose=()=>{
        this.props.onClose();
    }

    render() {
        return (
           <Modal
               title={"分配权限"}
               visible={this.props.visible}
               onOk={this.onClose}
               onCancel={this.onClose}
           >
               <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                   <Checkbox
                       // indeterminate={this.state.indeterminate}
                       // onChange={this.onCheckAllChange}
                       // checked={this.state.checkAll}
                   >
                       全选
                   </Checkbox>
               </div>
               <br />
               <CheckboxGroup
                   options={plainOptions}
                   // value={this.state.checkedList}
                   // onChange={this.onChange}
               />
           </Modal>
        )
    };
}

export default MyRoleTree;
