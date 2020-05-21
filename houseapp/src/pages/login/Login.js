import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

import { WingBlank, InputItem, WhiteSpace, Flex } from 'antd-mobile';

//引入button
import { Button } from 'antd-mobile'
//引入跳转
import { Link } from 'react-router-dom'
//引入api请求
import { login } from '../../api/apis';
// 引入scss
import '../../assets/css/login.scss'

// 引入图片
// let logo= require('../../assets/imgs/Logo.jpg')  es5语法
// import logo from '../../assets/imgs/Logo.jpg'    es6语法

export default class Reg extends Component {

  state = {
    acc: '',//账号
    pwd: '',//密码
    errorChg: 'none',//错误提示
  }

  render() {
    let { acc, pwd, errorChg } = this.state
    return (
      <div className='login'>
        <WingBlank size='lg'>
          <Flex justify='center'>
            {/* 引入图片 */}
            {/* <img src='http://img1.imgtn.bdimg.com/it/u=177869920,1562834805&fm=26&gp=0.jpg'></img> */}
            {/* <img src={logo}></img> */}
            <img alt='' src={require('../../assets/imgs/Logo.jpg')}></img>
          </Flex>

          <InputItem
            type="text"
            placeholder="请输入账号"
            value={acc}
            onChange={this.chekAcc.bind(this)}
            clear
          >
            <div style={{ backgroundImage: `url(${require('../../assets/imgs/user.svg')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>

          <InputItem
            type="password"
            placeholder="请输入密码"
            value={pwd}
            onChange={this.chekPwd.bind(this)}
            clear
          >
            <div style={{ backgroundImage: `url(${require('../../assets/imgs/pwd.svg')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>

          <WhiteSpace size='xl' />
          <Button onClick={this.Login} type='primary'> 登录</Button>
          <Flex justify='center'>
            <p style={{ display: errorChg, color: 'red', marginTop: '1em' }}>账号或密码错误，请重新输入</p>
          </Flex>

          <WhiteSpace size='xl' />
          <Flex justify='between'>
            <Link to='/reg'>手机快速注册</Link>
            <Link to='#'>忘记密码?</Link>
          </Flex>
        </WingBlank>
      </div>
    )
  }

  //账号
  chekAcc(val) {
    this.setState({ acc: val })
  }

  //密码
  chekPwd(val) {
    this.setState({ pwd: val })
  }


  Login = () => {
    //防抖节流：防止多次点击发送多个请求，给服务器造成压力
    //如果flag==true，表示2s还没到！！执行return
    if (this.flag) return;

    this.flag=true;

    setTimeout(()=>{this.flag=false},2000)

    login(this.state.acc, this.state.pwd).then(res => {
      if (res.data === 'ok') {
        console.log('成功');
        window.location.href = '/#/'
        // 持久存储：方法一
        // localStorage.acc=this.state.acc;
        // 持久存储：方法二
        localStorage.setItem('acc',this.state.acc)
      } else {
        console.log('失败');
        this.setState({ errorChg: 'block' })
      }
    })
  }
}

