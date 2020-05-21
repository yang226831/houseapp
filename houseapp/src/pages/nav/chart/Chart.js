import React, { Component } from 'react'
import { Flex,Button } from 'antd-mobile'


import '../../../assets/css/chart.scss'
export default class Chart extends Component {
  render() {
    return (
      <div className='chart'>

        <div>
          <Flex justify='center'>
            <img alt='' width='100' height='100'
              style={{ borderRadius: '50%' }}
              src={'http://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72abdee49bbd22a2834359bbb8a.jpg'}>
            </img>
          </Flex>
          <Flex justify='center'>
            <p>置业顾问：<span>张晓萌</span></p>
          </Flex>
          <Flex justify='center'>
            <p>专业服务诚信做人诚心做事</p>
          </Flex>
          <Flex justify='center'>
            <Button style={{width:'50%',marginBottom:'1em',background:'#1AAD00',color:'#fff'}}>我要聊天</Button>
          </Flex>
        </div>
      </div>

    )
  }
}
