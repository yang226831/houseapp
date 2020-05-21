import React, { Component } from 'react'

import '../../../assets/css/my.scss'
console.log(localStorage);


export default class My extends Component {

  state = {
    user: '登录/注册',
  }

  render() {
    return (
      <div className='my'>
        {/* 基本信息 */}
        <ul>
          <li>
            <div>
              <img alt='' width='90' height='90'
                style={{ borderRadius: '50%' }}
                src={'http://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72abdee49bbd22a2834359bbb8a.jpg'}>
              </img>
              <div>
                <p>{this.state.user}</p>
                <p>可以与经济人发起聊天</p>
              </div>

            </div>
            <img width='20' height='20' alt='' src={require('../../../assets/imgs/cam.svg')} onClick={this.quest.bind(this)}></img>
          </li>
          <li>
            <div>
              <p>0</p>
              <div>
                <img alt='' src={require('../../../assets/imgs/pakege.svg')} width='22' height='22'></img>
                <p>钱包</p>
              </div>
            </div>
            <div>
              <p>0</p>
              <div>
                <img alt='' src={require('../../../assets/imgs/youhui.svg')} width='22' height='22'></img>
                <p>优惠</p>
              </div>
            </div>
            <div>
              <p>0</p>
              <div>
                <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
                <p>积分</p>
              </div>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的积分</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的订阅</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>微聊联系人</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
        </ul>

        <ul>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的积分</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的订阅</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>微聊联系人</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
        </ul>



        <ul>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的积分</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的订阅</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>微聊联系人</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
        </ul>


        <ul>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的积分</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>我的订阅</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
          <li>
            <div>
              <img alt='' src={require('../../../assets/imgs/score.svg')} width='22' height='22'></img>
              <p>微聊联系人</p>
            </div>
            <img alt='' src={require('../../../assets/imgs/dayu.svg')} width='22' height='22'></img>
          </li>
        </ul>
      </div>
    )
  }

  //退出登录
  quest(){
    localStorage.acc=''
    this.setState({ user:'登录/注册'})
  }

  // 持久登录
  componentDidMount() {
    // 方法一：获取本地存储
    // console.log(localStorage.getItem('acc'));
    // this.acc?this.setState({user:this.state.acc}):this.setState({user:'登录/注册'})
    //方法二：获取本地存储
    let acc=localStorage.getItem('acc')
    acc ? this.setState({ user: acc }):this.setState({ user:'登录/注册'})
  }
}
