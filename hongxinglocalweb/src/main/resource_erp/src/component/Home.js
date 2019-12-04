import React, { Component } from 'react';
import { Divider,Collapse,Row,Col,Card,Icon,Avatar } from 'antd';
import EcharsHome  from './util/EcharsHome';
import '../static/css/App.css'
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
                <Row gutter={16} style={{marginTop:"0.4%"}}>
                    <Col span={19}>
                        <Card>
                            <EcharsHome/>
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card>
                            <h3><b>系统说明</b></h3>
                            <Divider/>
                            例如：通知！<br/>
                             首页个人信息中可以修改密码
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    };
}

export default Home;
