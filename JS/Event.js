/*importing the parent classes(objects) to use for child class(click events) inheritance*/
import Navv from '/JS/nav.js';
let navv = new Navv();
import Mapp from '/JS/findLocalGym.js';
let mapp = new Mapp();
import CalorieCalc from '/JS/calorieCalculater.js';
let cal = new CalorieCalc();

/*Exporting the child(click events) classes using inheritence to the main.js file*/

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

export class NavEvents extends Navv{
    constructor(){
        super(Navv)
        this.menuButton = document.getElementById('menu-icon');
        this.menuButton.onclick = function(){
            navv.menuBtn()
        }
    }
}

















