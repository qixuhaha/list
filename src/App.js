import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.less';
import {Button} from "antd"
import { Progress } from 'antd';
// import "antd/dist/antd.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">Search</Button>
    <Progress percent={30}  strokeColor='orange'/>
      </div>
    );
  }
}
// import { Button } from 'antd';

// ReactDOM.render(
//   <div>
//     <Button type="primary" shape="circle" icon="search" />
//     <Button type="primary" icon="search">Search</Button>
//     <Button shape="circle" icon="search" />
//     <Button icon="search">Search</Button>
//     <br />
//     <Button shape="circle" icon="search" />
//     <Button icon="search">Search</Button>
//     <Button type="dashed" shape="circle" icon="search" />
//     <Button type="dashed" icon="search">Search</Button>
//   </div>,
//   mountNode
// );

export default App;
