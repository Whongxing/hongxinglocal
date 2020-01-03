import React, { Component } from 'react';
import {
    Row, Col, Card, Upload, Button, Icon, Tag,
    Typography, Divider, Table, Avatar, Tooltip,message, Popconfirm
} from 'antd';


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const data = [
    {
        key: '1',
        file_name: 'date_test.jpg',
        file_result: '尹肖：Hell！TestData',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
];

const { Title } = Typography;
const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'yyy.png',
        status: 'error',
    },
];

const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
};

class Test extends Component{
     constructor(props){
         super(props);
         this.state={
            data:[],
            columns:[
                 {
                     title: '图片',
                     dataIndex: 'file_img',
                     key: 'img',
                     render:(text)=> {
                         text = text===1?"cadetblue":"";
                         return(
                             <div>
                                 <Avatar shape="square" size={199} style={{backgroundColor:text}}
                                         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                 />
                             </div>
                         )
                     }
                 },
                 {
                     title: '文件名称',
                     dataIndex: 'file_name',
                     key: 'name',
                     align:'center',
                     render: text => <a>{text}</a>,
                 },
                 {
                     title: '文字识别结果',
                     dataIndex: 'file_result',
                     key: 'result',
                     align:'center',
                 },
                 {
                     title: '操作',
                     key: 'action',
                     align:'center',
                     render: (text, record) => {
                         return(
                             <div>
                                 <span
                                 key="0"
                                 className="control-button"
                                 onClick={() => this.deleteTest()}
                             >
                                       <Tooltip placement="top" title="存入数据库">
                                             <Icon type="cloud" style={{color: 'green'}}/>
                                       </Tooltip>
                                </span>
                                    <Divider type={"vertical"}/>
                                 <span
                                     key="0"
                                     className="control-button"
                                 >
                                       <Tooltip placement="top" title="丢弃">
                                           <Popconfirm
                                               title="警告,确认丢弃这条测试数据吗?"
                                               icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                                                onConfirm={() => this.deleteTest()}
                                               // onCancel={cancel}
                                               okText="Yes"
                                               cancelText="No"
                                           >
                                             <Icon type="delete" style={{color: 'red'}}/>
                                           </Popconfirm>
                                       </Tooltip>
                                </span>
                             </div>
                         )
                     },
                 },
             ]
         }
     }

    searchTest=()=>{
        this.setState({
            data:data,
        })
    }

    handleChange = info => {

        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    base64: imageUrl.substr(imageUrl.indexOf(",") + 1),
                    loading: false,
                }),
            );
        }
    };

    deleteTest=()=>{
        this.setState({
            data:[],
         })
    }

    beforeUploadChange = (file) => {
        const isJpg = file.type === 'image/jpeg';
        if (!isJpg) {
            message.error('只能上传jpg类型图片');
            return false;
        }

    };
    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={(file) => this.beforeUploadChange(file)}
                                onChange={this.handleChange}
                                style={{display: "inline-block", width: '250px',height:'160px'}}
                            >
                                {
                                    imageUrl ? <img src={imageUrl} alt="avatar" style={{ height:'100%',width: '100%' }} /> : uploadButton
                                }
                            </Upload>
                            <Button type="primary" style={{marginTop:'46%',marginLeft:'56%'}}
                                                    onClick={()=>this.searchTest()}
                            >
                                <Icon type="pic-right" /> 开始测试
                            </Button>
                        </Card>
                    </Col>

                    <Col span={18}>
                        <Card>
                            <Title level={4}>测试结果</Title>
                            <Divider/>
                            <Table columns={this.state.columns} dataSource={this.state.data} pagination={ false }/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    };
}

export default Test;
