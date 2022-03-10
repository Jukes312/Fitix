export default class CalorieCalc{
    constructor(){
        this.age = document.getElementById('Age');
        this.height = document.getElementById('Height');
        this.weight = document.getElementById('Weight');
        this.gender = document.getElementById('Gender');
        this.html = document.getElementById('Day-calorie');
        this.result;
        
    }
/*Logic for the calorie calculater to make calculation based on the input with some error handling*/
    calcCalorie(){
        if (this.age.value === ''||this.height.value === ''||this.weight.value === ''){
            alert('Please fill in input')
        }
        

        else{
        if(this.gender.value === 'Male'){
        this.result = (this.weight.value*13.397 + this.height.value*4.799) - this.age.value*5.677 + 88.362;
        if(isNaN(this.result)){   
            alert('Please change your input to number');
        }
        else this.html.innerHTML = `${Math.round(this.result)+' '+'Kcal'}`
    }
     else {
        this.result = (this.weight.value*9.247 + this.height.value*3.098) - this.age.value*4.330 + 447.593;
        if(isNaN(this.result)){   
            alert('Please change your input to number');
        }
        else this.html.innerHTML = `${Math.round(this.result)+' '+'Kcal'}`
    }}
    }
/*Logic to clear the inputs with one click of a button*/
    clearInput(){
        this.age.value = '',
        this.height.value = '',
        this.weight.value = ''
    }
}

