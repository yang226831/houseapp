import React, { Component } from 'react'
import First from '../nav/first/First'
import Chart from './chart/Chart'
import My from './my/My'
import Redouce from './redouce/Redouce'



import { TabBar } from 'antd-mobile'
export default class Nav extends Component {
  state = {
    selectedTab: 'blueTab',
    hidden: false,
    fullScreen: true,
  };

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#00BC5B"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="导航"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../../assets/imgs/index.svg')}) center center /  21px 21px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../../assets/imgs/index_s.svg')}) center center /  21px 21px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <First />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/chart.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/chrat_s.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            title="微聊"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Chart style={{height:'100%'}}></Chart>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/tuijian.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/tuijian-s.svg')}) center center /  21px 21px no-repeat`
              }}
              />
            }
            title="推荐"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Redouce />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../../assets/imgs/my.svg') }}
            selectedIcon={{ uri: require('../../assets/imgs/my-s.svg') }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My />
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}