export default class Navv{
    constructor(){
        this.navContent = document.getElementsByClassName('nav__content')[0];
        
    }
    
    menuBtn(){
        this.navContent.classList.toggle('nav__content-open')
    }
}

