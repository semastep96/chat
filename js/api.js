import Cookies from 'js-cookie'
export const TOKEN_KEY = 'token'

export const API = {
  API_URL: 'https://chat1-341409.oa.r.appspot.com/api/',
  SOCKET_URL: `ws://chat1-341409.oa.r.appspot.com/websockets?`,
  AUTH_ENDPOINT: 'user',
  ME_ENDPOINT: 'user/me',
  MESSAGES_ENDPOINT: 'messages/',
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
  },
  async getMessages() {
    const response = await this.makeResponse(this.MESSAGES_ENDPOINT, 'GET')
    return response.messages
  },
  connect() {
    return new WebSocket(`${this.SOCKET_URL}${Cookies.get(TOKEN_KEY)}`);
  },
  sendMessage(socket, text) {
    socket.send(JSON.stringify({
      text: `${text}`,
    }));    
  }
}
