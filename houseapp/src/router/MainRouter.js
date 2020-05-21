import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'

//路由容器HashRouter:所有组件切换都发生在HashRouter中（对标router-view）
//路由切换组件Route：怎么切换？？4个大页面注册、登录、注册、导航、城市
//多路线匹配组件Switch：匹配下面引用的Route，成功就进行渲染
import Login from '../pages/login/Login' //登录
import City from '../pages/city/City'    //选择城市
import Nav from '../pages/nav/Nav'       //导航
import Reg from '../pages/reg/Reg'       //注册
import Map from '../pages/map/Map'       //地图
import Error from '../pages/error404/Error404'

//路由
export default class MainRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* {path：要匹配的hash值  component：匹配成功后加载的页面} */}
          {/* {path：默认是模糊匹配，只要以path开头，都会被拦截 的页面} */}
          {/* {exact ：精准匹配,path从模糊变为精准匹配  ===  才会被拦截} */}
           <Route path='/' exact component={Nav}></Route>
           <Route path='/reg' component={Reg}></Route>
           <Route path='/login' component= {Login} ></Route>
           <Route path='/city/:city' component={City}></Route>
           <Route path='/map' component={Map}></Route>
           {/* 检测用户输入非法地址：1.给404页面 2.跳回首页 */}
           {/* 重点：默认路线，如果以上Route都没匹配成功，跳转到Error404 */}
           <Route component={Error}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
