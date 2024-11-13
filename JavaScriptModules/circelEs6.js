import { _radius } from "./circle";

const _radius = new WeakMap();
export default class Circel{
    constructor(radius){
        _radius.set(this,radius);
    }
    drow(){
        console.log('Circel radius :'+ _radius.get(this));
    }
}

class Circel {
    constructor(radius) {
        _radius.set(this, radius);
    }
    drow() {
        console.log('Circel radius :' + _radius.get(this));
    }
}
exports.Circel = Circel;
