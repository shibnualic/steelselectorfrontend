import React, { useState } from 'react'
import './FormulaSelector.css'
import advanceFormula from '../Assets/advanceFormula'



const FormulaSelector = () => {

    const [formula, setFormula] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setResult('');
        setFormula({
            ...formula, [e.target.name]: e.target.value
        })
    }

    const calculateValue = () => {
        if (Object.keys(formula).length === 10) {
            if (!formula.inputValue1 || !formula.inputValue2 || !formula.inputValue3 || !formula.inputValue4) {
                setError("Please fill all fields");
            } else {
                setError('');
                setResult(formula.calculation());
            }

        } else if (Object.keys(formula).length === 8) {
            if (!formula.inputValue1 || !formula.inputValue2 || !formula.inputValue3) {
                setError("Please fill all fields");
            } else {
                setError('');
                setResult(formula.calculation());
            }
        } else {
            if (!formula.inputValue1 || !formula.inputValue2) {
                setError("Please fill all fields");
            } else {
                setError('');
                setResult(formula.calculation());
            }
        }
    }

    return (
        <div>
            <div className='formula-selector'>
                <h2>Calculate design parameters</h2>
                <h4>Enter all values in imperial unit system</h4>
                <div className='formula-selector-itemfield'>
                    <p>Select parameter</p>
                    <select value={formula.name} onChange={(e) => { setResult(''); e.target.value ? setFormula(advanceFormula.find(item => item.name === e.target.value)) : setFormula('') }} name='formula' className='formula-selector-selector'>
                        <option value="">Select parameter to calculate</option>
                        {advanceFormula.map((item, index) => (
                            <option key={index} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {Object.keys(formula).length === 10 &&
                <div className='formula-selector'>
                    <p>Enter following values</p>
                    <div className='formula-selector-value'>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName1}</p>
                            <input value={formula.inputValue1} onChange={changeHandler} type='text' name='inputValue1' placeholder='Type here' />
                        </div>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName2}</p>
                            <input value={formula.inputValue2} onChange={changeHandler} type='text' name='inputValue2' placeholder='Type here' />
                        </div>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName3}</p>
                            <input value={formula.inputValue3} onChange={changeHandler} type='text' name='inputValue3' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='formula-selector-value'>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName4}</p>
                            <input value={formula.inputValue4} onChange={changeHandler} type='text' name='inputValue4' placeholder='Type here' />
                        </div>
                    </div>
                    <button onClick={calculateValue} className='formula-selector-btn'>Calculate</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='formula-selector-result'>
                        <p>Result: {result} </p>
                    </div>

                </div>}
            {Object.keys(formula).length === 8 &&
                <div className='formula-selector'>
                    <p>Enter following values</p>
                    <div className='formula-selector-value'>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName1}</p>
                            <input value={formula.inputValue1} onChange={changeHandler} type='text' name='inputValue1' placeholder='Type here' />
                        </div>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName2}</p>
                            <input value={formula.inputValue2} onChange={changeHandler} type='text' name='inputValue2' placeholder='Type here' />
                        </div>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName3}</p>
                            <input value={formula.inputValue3} onChange={changeHandler} type='text' name='inputValue3' placeholder='Type here' />
                        </div>
                    </div>

                    <button onClick={calculateValue} className='formula-selector-btn'>Calculate</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='formula-selector-result'>
                        <p>Result: {result}</p>
                    </div>

                </div>}
            {Object.keys(formula).length === 6 &&
                <div className='formula-selector'>
                    <p>Enter following values</p>
                    <div className='formula-selector-value'>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName1}</p>
                            <input value={formula.inputValue1} onChange={changeHandler} type='text' name='inputValue1' placeholder='Type here' />
                        </div>
                        <div className='formula-selector-itemfield'>
                            <p>{formula.inputName2}</p>
                            <input value={formula.inputValue2} onChange={changeHandler} type='text' name='inputValue2' placeholder='Type here' />
                        </div>
                    </div>

                    <button onClick={calculateValue} className='formula-selector-btn'>Calculate</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='formula-selector-result'>
                        <p>Result: {result}</p>
                    </div>

                </div>}
        </div>

    )

}
export default FormulaSelector