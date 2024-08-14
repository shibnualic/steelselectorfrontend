import circular_tube from './Circular tube.png';
import flat_steel from './Flat steel plate.png';
import square_tube from './Square tube.png';


let formula = [{
    name: 'Circular Tube',
    image: circular_tube,
    thickness:"",
    input1: 'Outer radius',
    input2: 'length',
    input1Value: "",
    input2Value: "",
    volume: function () {

        return 3.14* this.input2Value*((this.input1Value *this.input1Value)-((this.input1Value-this.thickness)*(this.input1Value-this.thickness)))
    }
}, {
    name: 'Flat sheet',
    image: flat_steel,
    thickness:"",
    input1: 'Width',
    input2: 'length',
    input1Value: "",
    input2Value: "",
    volume: function () {

        return this.input1Value * this.input2Value*this.thickness
    }
}, {
    name: 'Square Tube',
    image: square_tube,
    thickness:"",
    input1: 'Width',
    input2: 'length',
    input1Value: "",
    input2Value: "",
    volume: function() {
        return (((this.input1Value * this.input1Value)-((this.input1Value-this.thickness)*(this.input1Value-this.thickness)))*this.input2Value)
    }
}
]


export default formula