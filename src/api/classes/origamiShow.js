export class OrigamiShow {
  id = -1
  name = 'no name'
  difficulty = 0
  timeToSolve = '0 min'
  mainPhoto = 'https://'
  constructor(json) {
    this.id = json['id_origami']
    this.name = json['name']
    this.difficulty = json['difficulty']
    this.timeToSolve = json['time_to_solve']
    this.mainPhoto = json['main_photo']
  }
}
