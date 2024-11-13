
const _radius = new WeakMap();
export default class Circel{
    constructor(radius){
        _radius.set(this,radius);
    }
    drow(){
        return 'Circel radius :'+ _radius.get(this);
    }
}