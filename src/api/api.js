export class API {
  static serverAdress = ''
  static getMethod = async (url, params) => {
    var response = await fetch(url)
    if (response.ok) {
      let json = await response.json()
      return json
    } else {
      alert('Ошибка HTTP: ' + response.status)
    }
  }
}
