//入口视图
import React, { Component } from 'react'

//引入路由组件
import MainRouter from './router/MainRouter'

export default class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        {/* <h1>入口视图</h1> */}
        <MainRouter></MainRouter>
      </div>
    )
  }
}
