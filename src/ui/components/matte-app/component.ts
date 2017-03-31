import Component, { tracked }from "@glimmer/component";

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

  @tracked score = 0

  @tracked('equation')
  get equationDisplay(){
    return `${this.equation.left} ${this.equation.sign} ${this.equation.right} = `
  }

  @tracked settings = {
    left: {
      min: 1,
      max: 10
    },
    right: {
      min: 1,
      max: 10
    },
    result: {
      min: 1,
      max: 10
    }
  }

  guess(event) {
    let guess = +event.target.value
    if (guess == this.equation.result) {
      this.score++
      this.newEquation()
      event.target.value = ""
    }
  }

  newEquation(){
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

  updateSettings(settings) {
    console.log("this in updateSettings", this)
    console.log("settings in updateSettings", settings)
    this.settings = settings
    this.newEquation()
  }

  randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
