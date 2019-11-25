import React, { Component } from 'react';
import { DatePicker,Collapse,Row,Col,Card,Icon,Avatar } from 'antd';
import '../static/css/App.css'
const { Meta } = Card;

const { Panel } = Collapse;

class Home extends Component{


    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col   span={4}  >
                        <Card hoverable  style={{background:`url(${require("../static/images/card.jpg")})` }}>
                                <div className='home_name'>1000条</div>
                                <div  className='home_icon'>
                                    <Icon type="heat-map" />
                                    <div className='home_content'>服务调用</div>
                                </div>

                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card className="gutter-row"  hoverable style={{background:`url(${require("../static/images/card.jpg")})` }}>
                            <div className='home_name'>1000条</div>
                            <div  className='home_icon'>
                                <Icon type="box-plot" />
                                <div className='home_content'>服务调用</div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card className="gutter-row" hoverable style={{background:`url(${require("../static/images/card.jpg")})` }}>
                            <div className='home_name'>1000条</div>
                            <div  className='home_icon'>
                                <Icon type="history" />
                                <div className='home_content'>服务调用</div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card className="gutter-row" hoverable style={{background:`url(${require("../static/images/card.jpg")})` }}>
                            <div className='home_name'>1000条</div>
                            <div  className='home_icon'>
                                <Icon type="line-chart" />
                                <div className='home_content'>服务调用</div>
                            </div>
                        </Card>
                    </Col>
                        <Col span={4}>
                        <Card className="gutter-row" hoverable  style={{background:`url(${require("../static/images/card.jpg")})` }}>
                            <div className='home_name'>1000条</div>
                            <div  className='home_icon'>
                                <Icon type="radar-chart" />
                                <div className='home_content'>服务调用</div>
                            </div>
                        </Card>
                    </Col >
                    <Col span={4}>
                        <Card className="gutter-row" style={{background:`url(${require("../static/images/c3.jpg")})` }}
                              hoverable
                              actions={[
                                  <Icon type="setting" key="setting" />,
                                  <Icon type="edit" key="edit" />,
                                  <Icon type="ellipsis" key="ellipsis" />,
                              ]}
                        >
                            <div className='home_people'><Icon type="star" spin />   个人信息</div>
                        </Card>
                    </Col>
                </Row>
                <Collapse accordion  style={{marginTop:6}}>
                    <Panel header="可以添加一些展示信息" key="1">
                        <p>此处可以添加一段描述或设置</p>
                    </Panel>
                </Collapse>
            </div>
        )
    };
}

export default Home;
