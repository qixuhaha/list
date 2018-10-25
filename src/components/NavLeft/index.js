import React, { Component } from 'react';
import MenuConfig from  "../../config/menuConfig"
import { Menu } from 'antd';
import "./index.less"
// import MenuItem from 'antd/lib/menu/MenuItem';
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {
    
    componentWillMount(){
    const menuTreeNode =  this.renderMenu(MenuConfig);//将数据传到函数中去进行递归
    this.setState({
        menuTreeNode
    })
    }
    //菜单渲染
    //递归的实现  没有children的话直接渲染submenu如果有children 的话渲染  menu.item
    renderMenu = (data) =>{
          return  data.map((item)=>{
                if(item.children){
                    return (<SubMenu title={item.title} key={item.key}>
                        {
                            this.renderMenu(item.children)
                        }
                        </SubMenu>)
                        }
                else{
                    return   <Menu.Item key={item.key} >{item.title}</Menu.Item>
                }
            })
    }
    render() {
        return (
            <div>
               <div className="logo">
                   <img src="/assets/logo-ant.svg"alt=""/>
                   <h1>周海鑫</h1>
               </div>
 <Menu   mode="vertical" theme='dark'> 
    {this.state.menuTreeNode}
  </Menu>
            </div>
        );
    }
}

export default NavLeft;