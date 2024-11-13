
const _radius = new WeakMap();
class Circel{
    constructor(radius){
        _radius.set(this,radius);
    }
    drow(){
        console.log('Circel radius :'+ _radius.get(this));
    }
}

module.exports = Circel;
// module.exports = {'Circel':Circel,'ABC':ABC}
