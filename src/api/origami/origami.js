import { API } from '../api'
import { Origami } from '../classes/origami'
import { OrigamiShow } from '../classes/origamiShow'

export class OrigamiAPI {
  static getListOrigamies = async () => {
    var tmp = []
    //var res = await API.getMethod('origamies/getAllOrigamies')
    var res = await API.getMethod('/origami/getAll')
    res['response'].map((element) => {
      tmp.push(new Origami(element))
    })

    return tmp
  }

  static getOrigamieById = async (id) => {
    //var res = await API.getMethod('origamies/getAllOrigamies')
    var res = await API.getMethod('/origami/getById?id=' + id)

    return new Origami(res['response'][0])
  }
}
