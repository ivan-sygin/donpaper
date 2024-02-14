export class API {
  static serverAdress = 'https://donntu-paper-server.serveo.net'
  static getMethod = async (url, params) => {
    var response = await fetch(this.serverAdress + url)
    if (response.ok) {
      let json = await response.json()
      return json
    } else {
      alert('Ошибка HTTP: ' + response.status)
    }
  }
}
