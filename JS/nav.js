export default class Navv{
    constructor(){
        this.navContent = document.getElementsByClassName('nav__content')[0];
        
    }
    /*Swaping classes implemnted in the style sheet to manipulate the syles on click*/
    menuBtn(){
        this.navContent.classList.toggle('nav__content-open')
    }
}

