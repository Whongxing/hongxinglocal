import React, { Component } from 'react';
import { Modal,Checkbox} from 'antd';

const CheckboxGroup = Checkbox.Group;


class MyRoleTree extends Component{

    constructor(props){
        super(props);
        this.state={
            indeterminate: true,
            checkAll: false,
            checkedList:this.props.mydata,
        }
    }

    onOk=()=>{
        console.log(this.state.checkedList);
        this.props.onOk(this.state.checkedList);
    }


    onClose=()=>{
        this.props.onClose();
    }

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? this.props.data : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < this.props.data.length,
            checkAll: checkedList.length === this.props.data.length,
        });
    };

    render() {
        return (
           <Modal
               title={"分配权限"}
               visible={this.props.visible}
               onOk={this.onOk}
               onCancel={this.onClose}
           >
               <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                   <Checkbox
                       indeterminate={this.state.indeterminate}
                       onChange={this.onCheckAllChange}
                       checked={this.state.checkAll}
                   >
                       全选
                   </Checkbox>
               </div>
               <br />
               <CheckboxGroup
                    defaultValue={this.props.mydata}
                    options={this.props.data}
                    // value={this.state.checkedList}
                    onChange={this.onChange}
               />
           </Modal>
        )
    };
}

export default MyRoleTree;
