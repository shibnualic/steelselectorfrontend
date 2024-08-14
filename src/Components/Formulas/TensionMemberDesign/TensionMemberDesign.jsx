import React from 'react'
import "./TensionMemberDesign.css"

const TensionMemberDesign = () => {



    return (
        <div className='inputForCalculation'>
            <p>Enter following values</p>
            <div className='inputForCalculation-value'>
                <div className='inputForCalculation-itemfield'>
                    <p>paintability</p>
                    <input value='' onChange='' type='text' name='paintability' placeholder='Type here' />
                </div>
                <div className='inputForCalculation-itemfield'>
                    <p>rustresistence</p>
                    <input value='' onChange='' type='text' name='rustresistence' placeholder='Type here' />
                </div>
                <div className='inputForCalculation-itemfield'>
                    <p>durability</p>
                    <input value='' onChange='' type='text' name='durability' placeholder='Type here' />
                </div>
            </div>
            <button onClick="" className='inputForCalculation-btn'>Calculate</button>
            <div className='inputForCalculation-result'>
                <p>TensionMemberDesign is </p>
            </div>

        </div>
    )
}

export default TensionMemberDesign
