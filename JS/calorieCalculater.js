export default class CalorieCalc{
    constructor(){
        this.age = document.getElementById('Age');
        this.height = document.getElementById('Height');
        this.weight = document.getElementById('Weight');
        this.gender = document.getElementById('Gender');
        this.html = document.getElementById('Day-calorie');
        this.result;
    }

    calcHim(){
        if(this.gender.value === 'Male'){
        this.result = (this.weight.value*13.397 + this.height.value*4.799) - this.age.value*5.677 + 88.362;
        this.html.innerHTML = `${Math.round(this.result)+' '+'Kcal'}`
    }
     else {
        this.result = (this.weight.value*9.247 + this.height.value*3.098) - this.age.value*4.330 + 447.593;
        this.html.innerHTML = `${Math.round(this.result)+' '+'Kcal'}`
    }
    }
}

