import Component, { tracked }from "@glimmer/component";
//import * as $ from 'jquery'

export default class MatteApp extends Component {

  constructor(args){
    super(args)
    this.newEquation()
  }

  @tracked equation = {
    left: 0,
    sign: "+",
    right: 0,
    result: 0
  }

  @tracked gifUrl = ""

  @tracked score = 0

  @tracked('equation')
  get equationDisplay(){
    return `${this.equation.left} ${this.equation.sign} ${this.equation.right} = `
  }

  guess(event) {
    let guess = +event.target.value
    console.log("guess:",guess)
    console.log(event)
    if (guess == this.equation.result) {
      console.log("correct!")
      this.score++
      this.newEquation()
      event.target.value = ""
      this.newGif()
    } else {
      console.log("wrong.")
    }
  }

  newGif(){
    //let gifJson = $.getJSON(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
    /*let result = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
    console.log(result)
    let gifJson = await result.json()
    console.log(gifJson)
    console.log(gifJson)*/
  }

  newEquation(){
    let left = this.randomIntFromInterval(1, 9)
    let right = this.randomIntFromInterval(1, 9)

    this.equation = {
      left,
      sign: "+",
      right,
      result: left + right
    }
  }

  randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
