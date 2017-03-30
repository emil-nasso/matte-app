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
    if (guess == this.equation.result) {
      this.score++
      this.newEquation()
      event.target.value = ""
      // this.newGif()
    }
  }

  // async newGif(){
    //let gifJson = $.getJSON(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
    /*let result = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
    console.log(result)
    let gifJson = await result.json()
    console.log(gifJson)
    console.log(gifJson)*/
  // }

  newEquation(){
    // let left = this.randomIntFromInterval(1, 9)
    // let right = this.randomIntFromInterval(1, 9)

    var result = this.randomIntFromInterval(2,10)
    console.log(result)
    let correctEquations = []
    for (var left = 1; left<10; left++) {
      for (let right = 1;right<10; right++) {
        if ((left + right) == result) {
          correctEquations.push({
            left,
            right,
            result,
            sign: "+"
          })
        }
      }
    }

    let index = this.randomIntFromInterval(0, correctEquations.length-1)
    let equation = correctEquations[index]
    console.log(correctEquations, index, equation )
    this.equation = equation
  }

  randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
