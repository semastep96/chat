import Cookies from 'js-cookie'
export const TOKEN_KEY = 'token'

export const API = {
  API_URL: 'https://chat1-341409.oa.r.appspot.com/api/',
  AUTH_ENDPOINT: 'user',
  ME_ENDPOINT: 'user/me',
  async makeResponse(endpoint, method = 'GET', body) {
    const token = Cookies.get(TOKEN_KEY)
    const headers = {}
    const url = this.API_URL + endpoint
    headers['Content-Type'] = 'application/json;charset=utf-8'
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
    if (body) {
      let response = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      })
      return await response.json()
    }
    let response = await fetch(url, {
      method: method,
      headers: headers,
    })
    return await response.json()
  },
  me() {
    return this.makeResponse(API.ME_ENDPOINT, 'GET')
  }
}
