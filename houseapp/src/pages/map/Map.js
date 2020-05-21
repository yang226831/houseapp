import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div className="info">
          <p id='info'></p>
        </div>
        <div id="container" style={{ height: '100%', width: '100%' }}></div>
      </div>
    )
  }
  componentDidMount() {
    var map = new window.AMap.Map("container", {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 13
    });
    //获取用户所在城市信息
    function showCityInfo() {
      //实例化城市查询类
      var citysearch = new window.AMap.CitySearch();
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          if (result && result.city && result.bounds) {
            var cityinfo = result.city;
            var citybounds = result.bounds;
            //地图显示当前城市
            map.setBounds(citybounds);
          }
        } 
      });
    }
    showCityInfo();
  }
}
