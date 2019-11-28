import { Tree } from 'antd';


class Demo extends React.Component {


    render() {
        return <Tree loadData={this.onLoadData}>{this.renderTreeNodes(this.state.treeData)}</Tree>;
    }
}
