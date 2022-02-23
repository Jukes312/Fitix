import Mapp from '/JS/findLocalGym.js'
let mapp = new Mapp();
import CalorieCalc from './calorieCalculater.Js';
let cal = new CalorieCalc();
export default class MappEvents extends Mapp{
constructor(){
    super(Mapp)
    this.buttonSearch = document.getElementById('myLocation')
    this.buttonSearch.onclick =  function(){
        mapp.buttonSearch()
    };

    this.inputSearch = document.getElementById('inputLocation')
    this.inputSearch.onclick = function(){
        mapp.inputSearch()
    }
}
}


export class CalorieEvents extends CalorieCalc{
    constructor(){
        super(CalorieCalc)
        this.buttonCalc = document.getElementById('Btn-calc');
        this.buttonCalc.onclick = function(){
            cal.calcHim()
        }
    }
}

















