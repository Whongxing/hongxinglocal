import React, { Component } from 'react';
import $ from 'jquery';
import Axios from 'axios';
import {
    Row, Col, Card, Upload, Button, Icon, Tag,
    Typography, Divider, Table, Avatar, Tooltip,message, Popconfirm
} from 'antd';
import * as config from "../../mock/config";


const fetchOption = {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
    mode:'cors',
    body: JSON.stringify(params)
}
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

// const data = [
//     {
//         key: '1',
//         file_name: 'date_test.jpg',
//         file_result: '尹肖：Hell！TestData',
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
// ];

const { Title } = Typography;


class Test extends Component{
     constructor(props){
         super(props);
         this.state={
            filename:null,
            data:[],
            columns:[
            //      {
            //          title: '图片',
            //          dataIndex: 'file_img',
            //          key: 'img',
            //          render:(text)=> {
            //              text = text===1?"cadetblue":"";
            //              return(
            //                  <div>
            //                      <Avatar shape="square" size={199} style={{backgroundColor:text}}
            //                              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            //                      />
            //                  </div>
            //              )
            //          }
            //      },
                 {
                     title: '文件名称',
                     dataIndex: 'key',
                     key: 'key',
                     align:'center',
                     render: text => <a>{text}</a>,
                 },
                 {
                     title: 'log_ID',
                     dataIndex: 'log_id',
                     key: 'log',
                     align:'center',
                 },
                {
                    title: '预处理切割数量',
                    dataIndex: 'words_result_num',
                    key: 'num',
                    align:'center',
                },
                {
                    title: '识别结果',
                    dataIndex: 'words_result',
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
                                 onClick={() => this.insertdata(record)}
                             >
                                       <Tooltip placement="top" title="存入数据库">
                                             <Icon type="cloud" style={{color: 'green'}}/>
                                       </Tooltip>
                                </span>
                                    <Divider type={"vertical"}/>
                                 <span
                                     key="1"
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

    insertdata=(record)=>{
        let url = config.baseUrl;
        let user = localStorage.getItem('user');
        let params  = {
            Fname :  record.key,
            Flogid :  record.log_id,
            Fcontent: record.words_result,
            Fnumber : record.words_result_num,
            Fuser : user,
        }
        fetch(url, fetchOption)
            .then(response => response.json())
            .then(responseJson => {
                 message.success("Request")
            }).catch(function (e) {
            message.error("网络错误");
        });

     }
    searchTest=()=>{
         let url = config.baseUrl+"/Ocrapi/OcrResult";
         let params = {
           filename: this.state.filename,
         }
        // let fetchOption = {
        //     method: 'POST',
        //     headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
        //     mode:'cors',
        //     body: JSON.stringify(params)
        // }
        if(params.filename==null||params.filename===''){
            message.warn("请上传图片");
            return  false;
        } else {
            fetch(url, fetchOption)
                .then(response => response.json())
                .then(responseJson => {
                    let  content = '';
                    responseJson.words_result.map((userdata,key)=>{
                        content = content+ userdata.words;
                    })
                    this.setState({
                        data:[
                            {
                                key: this.state.filename,
                               log_id: responseJson.log_id,
                               words_result_num: responseJson.words_result_num,
                                words_result : content,
                            }
                        ]
                    })
                }).catch(function (e) {
                message.error("网络错误");
            });
        }
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
        // this.setState({
        //     data:[],
        //  })
    }

    beforeUploadChange = (file) => {
        this.state.filename = file.name;
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
                    {/*<Col span={12}  style={{height:'10%', width: '30%'}}>*/}
                        <Card  style={{width: '766px',height:'236px'}}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={(file) => this.beforeUploadChange(file)}
                                onChange={this.handleChange}
                                style={{display: "inline-block"}}
                            >
                                {
                                    imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '700px',height:'166px'}}/> : uploadButton
                                }
                            </Upload>

                        {/*</Card>*/}
                    {/*</Col>*/}
                    {/*<Col  span={12}>*/}

                    {/*</Col>*/}
                        </Card>
                        <Button type="primary" style={{marginTop:'0.3%',marginLeft:'53%'}}
                                onClick={()=>this.searchTest()}
                        >
                            <Icon type="pic-right" /> 开始测试
                        </Button>
                </Row>

                <Row gutter={16} style={{marginTop:"0.4%"}}>
                    <Card>
                        <Title level={4}>测试结果</Title>
                        <Divider/>
                        <Table columns={this.state.columns} dataSource={this.state.data} pagination={ false }/>
                    </Card>
                </Row>
            </div>
        )
    };
}

export default Test;
