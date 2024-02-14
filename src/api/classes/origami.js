export class Origami {
  id = -1
  name = 'no name'
  difficulty = 0
  timeToSolve = '0 min'
  mainPhoto = 'https://'
  count_steps = 0
  photo_process = ['фото', 'фото', 'фото']
  desc_process = ['Сложите', 'Разложите', 'Сложите']
  author = 'ДонНТУ'
  /**
   * @param {json} json - The date
   */
  constructor(json) {
    console.log(json)
    this.id = json['id']
    this.name = json['name']
    this.difficulty = json['difficulty']
    this.timeToSolve = json['time_to_solve']
    this.mainPhoto = json['main_photo']
    if (json.hasOwnProperty('count_steps')) {
      this.count_steps = json['count_steps']
      this.photo_process = json['photo_process']
      this.desc_process = json['desc_process']
      this.author = json['author']
    }
  }
}
