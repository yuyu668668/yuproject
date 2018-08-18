import axios from 'axios'
export function login (params = {}) {
  return axios({
    url: '/api/admin/Index/login',
    method: 'post',
    data: params
  })
}
