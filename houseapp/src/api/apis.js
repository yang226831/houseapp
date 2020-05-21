import Axios from 'axios'

import qs from 'qs'

export const SERVE_IP = 'http://129.211.169.131:33833/'
//设置服务器IP公共路径
Axios.defaults.baseURL=SERVE_IP


//登录
export const login = (acc,pwd) => {
  return Axios.post('/login.php', qs.stringify({ acc, pwd}))
}

//注册
export const reg=(pwd,acc)=> Axios.post('/reg.php',qs.stringify({pwd,acc}))

//猜你喜欢房产列表
export const like=()=>Axios.get('/gethouselist.php',)