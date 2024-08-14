import React, { useState } from 'react'
import './WieghtCalculator.css'
import gauge from '../Assets/gauge'
import material from '../Assets/material'
import formula from '../Assets/formula'


const WieghtCalculator = () => {

    const [density, setDensity] = useState('');
    const [thickness,setThickness]=useState('')
    const [shape, setShape] = useState({
        name: "",
        image: "",
        thickness: "",
        input1: "",
        input2: "",
        input1Value: "",
        input2Value: "",
        volume: ""
    });
    const [weight, setWeight] = useState('');
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setWeight('');
        setShape({
            ...shape, [e.target.name]: e.target.value,thickness:thickness
        })
    }

    const calculateWieght = () => {
    
        if (!density || !shape || !shape.input1Value || !shape.input2Value ||!shape.thickness) {
            setError("Please fill all values")
        } else {
            setError('')
            let w = shape.volume() * density;
            w = Math.round(w * 100) / 100;
            setWeight(w)
        }
    }

    return (
        <div>

            <div className='wieghtcalculation'>
                <div className='wieghtcalculation-details'>

                    <div className='wieghtcalculation-itemfield'>
                        <h2>Calculate wieght of your steel part</h2>
                        <h4>Enter all values in imperial unit system</h4>
                        <p>Gauge</p>
                        <select value={thickness} onChange={(e) => {setShape( {...shape,thickness:e.target.value }); setWeight(''); e.target.value ? setThickness(e.target.value) : setThickness(''); }} name='thickness' className='wieghtcalculation-selector'>
                            <option value="">Select the gauge</option>
                            {gauge.map((item, index) => {
                                return <option key={index} value={item.thickness}>{item.name}</option>
                            }
                            )}
                        </select>
                        <p>Material</p>
                        <select value={density} onChange={(e) => { setWeight(''); e.target.value ? setDensity(e.target.value) : setDensity('');}} name='material' className='wieghtcalculation-selector'>
                            <option value="">Select a rating</option>
                            {material.map((item, index) => {
                                return <option key={index} value={item.density}>{item.name}</option>
                            }
                            )}
                        </select>
                        <p>Select the shape</p>
                        <select value={shape.name} onChange={(e) => { setWeight(''); e.target.value ? setShape(formula.find(i => i.name === e.target.value)) : setShape('') }} name='shape' className='wieghtcalculation-selector'>
                            <option value="">Select the shape</option>
                            {formula.map((item, index) => {
                                return <option key={index} value={item.name}>{item.name}</option>
                            }
                            )}
                        </select>
                    </div>
                    <button className='wieghtcalculation-btn wieghtcalculation-selector ' onClick={calculateWieght}>Calculate</button>

                </div>
                {shape.name && <div className='wieghtcalculation-img'>

                    <img src={shape.image} alt='' />
                    <div className='wieghtcalculation-itemfield '>
                        <p>{shape.input1}</p>
                        <input value={shape.input1Value} onChange={changeHandler} name='input1Value' />
                        <p>{shape.input2}</p>
                        <input value={shape.input2Value} onChange={changeHandler} name='input2Value' />
                    </div>
                </div>}

            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weight &&
                <div className='wieghtcalculation-rating'>
                    <h2>
                        Wieght of the selected part is {weight}
                    </h2>
                </div>}
        </div >
    )
}

export default WieghtCalculator
