import React, { Component } from 'react'

//引入表单
import { NavBar, Icon, Carousel, InputItem, Flex } from 'antd-mobile';

//引入scss
import '../../../assets/css/nav.scss'

// 引入猜你喜欢列表请求
import { like, SERVE_IP } from '../../../api/apis'

export default class First extends Component {

  state = {
    like_list: [],
    cityLocal: '定位中',
    SERVE_IP:SERVE_IP,
  }
  //加载完成时，渲染猜你喜欢列表请求
  // componentDidMount() {
    
  // }

  render() {
    return (
      <div className='nav'>
        {/* 头部导航 */}
        <div style={{ width: '100%', height: '3em', background: '#00BC5B', color: '#fff' }}>
          <Flex justify='between' style={{ padding: '0 1em' }}>
            <span onClick={this.jump.bind(this, '/#/city/'+this.state.cityLocal)} style={{ width: 'auto', lineHeight: '3em' }}>
              {this.state.cityLocal}
              <i className='iconfont icon-shangchuanicon_fuzhi_fuzhi-copy'></i>
            </span>
            <span onClick={this.jump.bind(this, '/#/sertch')} style={{ height: '2.4em', borderRadius: '1.2em', margin: '0 1em', width: '4em', flex: '1', background: '#fff' }}>
              <i className='iconfont icon-tubiao1-copy' style={{lineHeight:'2em', color: '#888', alignSelf: 'center', marginLeft: '1em' }}>
               <span style={{marginLeft:'1em'}}>找好房，上龙华App</span> 
              </i>
            </span>
            <i onClick={this.jump.bind(this, '/#/map')} className='iconfont icon-dingwei1-copy-copy'></i>
          </Flex>
        </div>
        {/* 轮播图 */}
        <div className='banner'>
          <Banner></Banner>
        </div>
        {/* 导航图标 */}
        <div>
          <ul className='navB'>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/newHouse.svg')}></img></div>
              <p>新房</p>
            </li>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/two-hand-house.svg')}></img></div>
              <p>二手房</p>
            </li>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/ret_house.svg')}></img></div>
              <p>租房</p>
            </li>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/write-house.svg')}></img></div>
              <p>商铺写字楼</p>
            </li>
          </ul>
          <ul className='navB'>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/sale_house.svg')}></img></div>
              <p>买房</p>
            </li>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/forgin-house.svg')}></img></div>
              <p>海外房产</p>
            </li>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/house-price.svg')}></img></div>
              <p>小区房价</p>
            </li>
            <li>
              <div><img alt='' src={require('../../../assets/imgs/question.svg')}></img></div>
              <p>问答</p>
            </li>
          </ul>
        </div>
        {/* 买房攻略 */}
        <div className='buyHouse'>
          <ul>
            <li>房产全百科</li>
            <li>专业的买房攻略</li>
          </ul>
          <ul>
            <li>
              <img width='60' height='60' src={require('../../../assets/imgs/borrow.svg')}></img>
              <p>我要贷款</p>
            </li>
            <li>
              <img width='60' height='60' src={require('../../../assets/imgs/computed.svg')}></img>
              <p>房贷计算</p>
            </li>
            <li>
              <img width='60' height='60' src={require('../../../assets/imgs/knologe.svg')}></img>
              <p>知识</p>
            </li>
            <li>
              <img width='60' height='60' src={require('../../../assets/imgs/car.svg')}></img>
              <p>扫一扫</p>
            </li>
          </ul>
        </div>
        {/* 猜您喜欢 */}
        <div className='like'>
          <p>猜你喜欢</p>
          <ul>
            {this.state.like_list.map((item, index) => {
              return <li key={index}>
                <img alt='' width='80' height='90' src={ SERVE_IP + item.imgs}></img>
                <div>
                  <p>{item.name}</p>
                  <p>{item.area} {item.range}</p>
                  <p>{item.type} {item.point}平</p>
                </div>
                <p><span>{item.price}/平</span></p>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
  //城市跳转
  jump(url) {
    window.location.href = url
  }
  //初始化地图
  componentDidMount() {

    //猜你喜欢请求
    like().then(res => {
      console.log(res);
      this.setState({ like_list: res.data })
    })
    var that = this;
    // var map = new window.AMap.Map("container", {
    //   resizeEnable: true,
    //   center: [116.397428, 39.90923],
    //   zoom: 13
    // });
    //获取用户所在城市信息
    function showCityInfo() {
      //实例化城市查询类
      var citysearch = new window.AMap.CitySearch();
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          if (result && result.city && result.bounds) {
            var cityinfo = result.city;
            that.setState({ cityLocal: cityinfo })
          }
        } else {
          that.setState({ cityLocal: result.info })
        }
      });
    }
    showCityInfo();
  }

  
}


//轮播图
class Banner extends React.Component {
  state = {
    data: ['Banner-01', 'Banner-02', 'Banner-03'],
    imgHeight: 176,
  }

  render() {
    return (
      <Carousel
        infinite
        autoplay
      >
        {this.state.data.map(val => (
          <a
            key={val}
            href="#"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              src={require('../../../assets/imgs/' + val + '.jpg')}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}