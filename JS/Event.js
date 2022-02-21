import Mapp from '/JS/findLocalGym.js'
let mapp = new Mapp();
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

















