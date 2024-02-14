import { API } from '../api'
import { OrigamiShow } from '../classes/origamiShow'

export class OrigamiAPI {
  static getListOrigamies = async () => {
    var tmp = []
    //var res = await API.getMethod('origamies/getAllOrigamies')
    var res = await API.getMethod('examples/getAllOrigamies.json')
    res['response'].forEach((element) => {
      tmp.push(new OrigamiShow(element))
    })

    return tmp
  }
}
