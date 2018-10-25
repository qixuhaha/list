import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index"
import NavLeft from "./components/NavLeft/index"
import "./style/common.less"
//承接页面
class Admin extends Component {
    render() {
        return (
                <Row className="container"> 
                    <Col span={4} className="nav-left"><NavLeft/></Col>
                    <Col span={20} className="main">
                    <Header/>
                        <Row className="content">
                            content
                        </Row>
                    <Footer/>
                    </Col>
                </Row>  
        );
    }
}

export default Admin;