import axios from 'weex-axios';
import '../util/mock.js'
const commonpost = (url, p) => {
  return new Promise((resolve, reject) => {
    axios.post(url, p).then(res => {
      resolve(res.data)
      console.log(res.data)
    })
  })
}

const commonget = (url, p) => {
  return new Promise((resolve, reject) => {
    axios.get(url, p).then(res => {
      resolve(res.data)
      console.log(res.data)
    })
  })
}

export const mockdemo = () => commonpost('http://192.168.23.169:8999/weex/post')