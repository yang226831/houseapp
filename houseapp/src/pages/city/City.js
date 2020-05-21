import React, { Component } from 'react'

import '../../assets/css/city.scss'

import BScroll from 'better-scroll'

//引入json
import city from '../../JSON/city.json'
console.log(city);


export default class City extends Component {

  state = {
    serchBar: '',
    cityLocal: '定位中'//定位城市
  }

  render() {
    return (
      <div id='city' style={{ height: '100%' }}>
        <div id='scroll'>
          <div>
            <img alt='' src={require('../../assets/imgs/error.svg')}></img>
            <p>选择城市</p>
          </div>

          <div>
            <p >当前城市</p>
            <div>
              <p>{this.state.cityLocal}</p>
            </div>
          </div>

          {/* key={index} */}
          {city.allcity.map(data => <div>
            <p className={data.title}>{data.title}</p>
            <div>
              <p>{data.tcity}</p>
            </div>
          </div>
          )}
        </div>


        <div>
          {
            city.allcity.map(data => <p onClick={this.clickBar.bind(this, data.title)}>{data.title}</p>)
          }
        </div>
      </div>
    )
  }

  //楼层图效果
  clickBar(v) {
    console.log(v);

    this.scroll.scrollToElement('.' + v, 500)

  }
  componentDidMount() {
    //betterScroll 实现纵向滚动
    this.scroll = new BScroll('#city', { click: true })
    //路由传值：当前城市
    this.setState({ cityLocal: this.props.match.params.city })
  }
}
