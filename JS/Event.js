import Mapp from '/JS/findLocalGym.js'
let mapp = new Mapp();
import CalorieCalc from '/JS/calorieCalculater.js';
let cal = new CalorieCalc();
import Nav from './Js/nav.js'
let nav = new Nav();
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
        this.clearbtn = document.getElementById('Btn-clear');
        this.clearbtn.onclick = function(){
            cal.clear()
        }
    }
}

export class NavEvents extends Nav{
    constructor(){
        super(Nav)
        this.menuButton = document.getElementById('menu-icon');
        this.menuButton.addEventListener('click',()=>{
            nav.menuBtn()
        })
    }
}

















