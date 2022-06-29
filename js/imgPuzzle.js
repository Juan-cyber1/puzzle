export default class imgPuzzle{
    constructor(el, imageSrc, width){
        this.parentEl = el;
        this.imageSrc = imageSrc;
        this.width = width;

        this.el = this.createWrapper();

        this.parentEl.appendChild(this.el);
    }
    createWrapper(){
        const div = document.createElement(tagName = 'div');

        return div;
    }
}