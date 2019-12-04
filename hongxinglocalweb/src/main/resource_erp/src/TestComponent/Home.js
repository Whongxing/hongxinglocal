import React, { Component } from 'react';
import { Tree } from 'antd';


class E extends React.Component {


    render() {
        return <Tree loadData={this.onLoadData}>{this.renderTreeNodes(this.state.treeData)}</Tree>;
    }
}
