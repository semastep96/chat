export const API = {
  API_URL: 'https://chat1-341409.oa.r.appspot.com/api/',
  AUTH_ENDPOINT: 'user',
  async makeResponse(endpoint, method = 'GET', headers = {}, body) {
    const url = this.API_URL + endpoint
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
    let response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    })
    return await response.json()
  }
}
