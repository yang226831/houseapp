import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

import { Flex, Radio, InputItem, WingBlank } from 'antd-mobile';
//引入button
import { Button } from 'antd-mobile'
//引入跳转
import { Link } from 'react-router-dom'
//引入api注册
import { reg } from '../../api/apis'

import '../../assets/css/reg.scss'


export default class Reg extends Component {

  state = {
    acc: '',//账号
    pwd: '',//密码
    verfilCode: '',//iput验证码
    divCode: '',//div验证码
    chekVerCode: 'none',//验证消息弹框切换
    chekReg: 'none'//验证消息弹框切换
  }

  render() {
    let { acc, pwd, verfilCode, chekReg, chekVerCode } = this.state
    return (
      <div className='reg'>
        <WingBlank size='lg'>
          <InputItem
            type="text"
            placeholder="请输入账号"
            onChange={this.accChg.bind(this)}
            value={acc}>
          </InputItem>

          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={this.pwdChg.bind(this)}
            value={pwd}>
          </InputItem>
          <div style={{ display: 'flex' }}>
            <InputItem
              type="text"
              placeholder="请输入验证码"
              value={verfilCode}
              onChange={this.verfilCode.bind(this)}>
            </InputItem>
            {/* <p style={{ alignSelf: 'center', textAlign: 'center', flex: '1', lineHeight: '44px', background: '#fff' ,position:'relative',top:0,left:0}}>获取验证码</p> */}
            <p style={{ alignSelf: 'center', textAlign: 'center', flex: '1', lineHeight: '43px', background: '#ccc', borderBottom: '1px solid #F4F4F4' }}
              onClick={this.code.bind(this)}
              className='code'
            >获取验证码</p>
          </div>

          <Flex style={{ padding: '15px' }}>
            <Flex.Item>
              <Radio className="my-radio" onChange={e => console.log('checkbox', e)}> 我已同意 <Link to='#' style={{ color: '#00BC5B' }}>《用户服务协议》及《隐私政策》</Link></Radio>
            </Flex.Item>
          </Flex>
          <Flex justify='center' style={{ color: 'red', marginBottom: '1em' }}>
            <p style={{ display: chekReg, color: 'red' }}>账号和密码错误</p>
            <p id='codeError' style={{ display: chekVerCode, color: 'red' }}>验证码错误</p>
          </Flex>
          <Flex justify="center">
             <div id="code" style={{ color: '#000',fontSize:'1.5em' }}>验证码：{this.state.divCode}</div>
          </Flex>
          <Button style={{ background: "#00BC5B", color: "#fff" }} onClick={this.reg.bind(this)}> 注册</Button>
        </WingBlank>
      </div>
    )
  }
  //账号
  accChg(val) {
    this.setState({ acc: val })
  }
  //密码
  pwdChg(val) {
    this.setState({ pwd: val })
  }
  //验证码value值回填
  verfilCode(val) {
    this.setState({ verfilCode: val })
  }
  //生成验证码
  code() {
    let that = this;
    var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    // 用来生成随机整数
    function getRandom(n, m) { // param: (Number, Number)
      n = Number(n);
      m = Number(m);
      // 确保 m 始终大于 n
      if (n > m) {
        var temp = n;
        n = m;
        m = temp;
      }
      // 下有详细说明
      return Math.floor(Math.random() * (m - n) + n);
    }
    // 将随机生成的整数下标对应的字母放入div中
    function getCode() {
      var str = '';
      // 验证码有几位就循环几次
      for (var i = 0; i < 4; i++) {
        var ran = getRandom(0, 62);
        str += codeStr.charAt(ran);
      }
      that.setState({ divCode: str })
    }
    console.log(this.state.divCode);
    getCode();
  }

  //注册
  reg() {
    // console.log(2222);
    console.log((this.state.pwd, this.state.acc));
    let codeError = document.getElementById('codeError')
    let { verfilCode, divCode } = this.state;
    //注册验证，为空时返回
    if (!(this.state.pwd && this.state.acc)) {
      this.setState({ chekReg: 'block' })
      return;
    } else {
      this.setState({ chekReg: 'none' })
      //验证码确认
      if (!(verfilCode && divCode)) {
        this.setState({ chekVerCode: 'block' })
        return;
      } else if (this.state.verfilCode !== this.state.divCode) {
        this.setState({ chekVerCode: 'block' })
        return;
      } else {
        reg(this.state.pwd, this.state.acc).then(res => {
          if (res.data === 'ok') {
            console.log('注册成功');
            window.location.href = '/#/login'
          } else {
            console.log('注册失败');
            codeError.innerHTML='注册失败'
            this.setState({ chekVerCode: 'block' })
          }
        })
      }
    }
  }
}