import Component, {tracked} from '@glimmer/component';

export default class AppSettings extends Component {

  @tracked showSettings = false
  @tracked settings = {}

  constructor(args) {
    super(args)
    this.settings = this.args.settings
  }

  toggleSettings(){
    this.showSettings = !this.showSettings
  }

  save(event){
    event.preventDefault()
    let form = event.target.ownerDocument
    this.settings = {
      left: {
        min: +form.getElementById("left-min").value,
        max: +form.getElementById("left-max").value,
      },
      right: {
        min: +form.getElementById("right-min").value,
        max: +form.getElementById("right-max").value,
      },
      result: {
        min: +form.getElementById("right-min").value,
        max: +form.getElementById("right-max").value,
      }
    }
    console.log("this.settings in save", this.settings)
    this.args.changeAction(this.settings)
    this.toggleSettings()
  }

};
