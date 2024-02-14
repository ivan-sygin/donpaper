import { API } from '../api'
import { Origami } from '../classes/origami'
import { OrigamiShow } from '../classes/origamiShow'

export class OrigamiAPI {
  static getListOrigamies = async () => {
    var tmp = []
    //var res = await API.getMethod('origamies/getAllOrigamies')
    var res = await API.getMethod('examples/getAllOrigamies.json')
    res['response'].map((element) => {
      tmp.push(new OrigamiShow(element))
    })

    return tmp
  }

  static getOrigamieById = async (id) => {
    //var res = await API.getMethod('origamies/getAllOrigamies')
    var res = await API.getMethod('examples/getOrigamie.json')

    return new Origami(res['response'][0])
  }
}
