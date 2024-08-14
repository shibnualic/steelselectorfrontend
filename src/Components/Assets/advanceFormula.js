
let advanceFormula = [
    {
        name: "Bend Allowance",
        inputName1: "Material Thickness",
        inputValue1: "",
        inputName2: "Inside Radius",
        inputValue2: "",
        inputName3: "K factor",
        inputValue3: "",
        inputName4: "Bend Angle",
        inputValue4: "",
        calculation: function () {
            return ((this.inputValue4 * Math.PI / 180) * (this.inputValue2 + (this.inputValue1 * this.inputValue3)))
        }

    }, {

        name: "Bend Deduction",
        inputName1: "Material Thickness",
        inputValue1: "",
        inputName2: "Inside Radius",
        inputValue2: "",
        inputName3: "K factor",
        inputValue3: "",
        inputName4: "Bend Angle",
        inputValue4: "",
        calculation: function () {
            return ((2 * ((Math.tan(this.inputValue4 / 2)) * (this.inputValue2 + this.inputValue1))) - (this.inputValue4 * Math.PI / 180 * (this.inputValue2 + (this.inputValue3 * this.inputValue1))))
        }
    },

    {
        name: "Outside Setback",
        inputName1: "Material Thickness",
        inputValue1: "",
        inputName2: "Inside Radius",
        inputValue2: "",
        inputName3: "Bend Angle",
        inputValue3: "",
        calculation: function () {
            return (Math.tan(this.inputValue3 / 2) * (this.inputValue2 + this.inputValue1))
        }
    },
    {
        name: "Inside Setback",

        inputName1: "Inside Radius",
        inputValue1: "",
        inputName2: "Bend Angle",
        inputValue2: "",
        calculation: function () {
            return (Math.tan(this.inputValue2 / 2) * (this.inputValue1))
        }
    }
]

export default advanceFormula;