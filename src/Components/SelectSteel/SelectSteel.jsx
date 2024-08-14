import React, { useState } from 'react'
import './SelectSteel.css'


const SelectSteel = () => {

    const [propertyDetails, setPropertyDetails] = useState({
        property1: "",
        property1rate: "",
        property2: "",
        property2rate: "",
        property3: "",
        property3rate: "",
        property4: "",
        property4rate: "",
        property5: "",
        property5rate: "",
        gauge: ""
    });

    const [matchingSteel, setBestMatchSteel] = useState('');
    const [error, setError] = useState('');




    const changeHandler = (e) => {
        if (["1", "2", "3", "4", "5"].includes(e.target.value)) {
            setPropertyDetails({
                ...propertyDetails, [e.target.name]: e.target.value
            })
            console.log(propertyDetails);

        } else if (Object.values(propertyDetails).includes(e.target.value)) {
            alert("Property already selected")
            setPropertyDetails(propertyDetails)
            console.log(propertyDetails);

        } else {
            setPropertyDetails({
                ...propertyDetails, [e.target.name]: e.target.value
            })
        }
    }

    const bestMatchSteel = async () => {
        if (!propertyDetails.gauge) {
            setError('Please indicate guage');
        } else {
            setError('')
            let responseData;
            await fetch('https://steelselectorbackend.onrender.com/bestmatchsteel', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(propertyDetails)
            }).then((resp) => resp.json()).then((data) => { responseData = data; setBestMatchSteel(responseData); })
            setPropertyDetails({
                property1: "",
                property1rate: "",
                property2: "",
                property2rate: "",
                property3: "",
                property3rate: "",
                property4: "",
                property4rate: "",
                property5: "",
                property5rate: "",
                gauge: ""
            })
        }
    }


    return (
        <div className='selectsteel'>
            <div className='selectsteel-rating'>
                <h2>Find your steel based on desgin priority</h2>
                <p>gauge</p>
                <div className='selectsteel-itemfield'>
                    {/* <input value={propertyDetails.gauge} onChange={changeHandler} name='gauge' /> */}
                    <select value={propertyDetails.gauge} onChange={changeHandler} name='gauge' className='selectsteel-selector'>
                            <option value="">Select Gauge</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="18">18</option>
                            <option value="20">20</option>
                    </select>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>

            <div className='selectsteel-rating'>
                <div className='selectsteel-priority'>
                    <div className='selectsteel-itemfield'>
                        <p>Priority One</p>
                        <select value={propertyDetails.property1} onChange={changeHandler} name='property1' className='selectsteel-selector'>
                            <option value="">Select a property</option>
                            <option value="property_ratings.corrosion_resistence">Corrosion Resistence</option>
                            <option value="property_ratings.durability">Durability</option>
                            <option value="property_ratings.weldability">Weldability</option>
                            <option value="property_ratings.strengthByWeight">Strength by weight</option>
                            <option value="property_ratings.strengthByCost">Strength by Cost</option>
                        </select>
                    </div>
                    <div className='selectsteel-itemfield'>
                        <p>Rating</p>
                        <select value={propertyDetails.property1rate} onChange={changeHandler} name='property1rate' className='selectsteel-selector'>
                            <option value="">Select a rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>

                <div className='selectsteel-priority'>
                    <div className='selectsteel-itemfield'>
                        <p>Priority Two</p>
                        <select value={propertyDetails.property2} onChange={changeHandler} name='property2' className='selectsteel-selector'>
                            <option value="">Select a property</option>
                            <option value="property_ratings.corrosion_resistence">Corrosion Resistence</option>
                            <option value="property_ratings.durability">Durability</option>
                            <option value="property_ratings.weldability">Weldability</option>
                            <option value="property_ratings.strengthByWeight">Strength by weight</option>
                            <option value="property_ratings.strengthByCost">Strength by Cost</option>
                        </select>
                    </div>
                    <div className='selectsteel-itemfield'>
                        <p>Rating</p>
                        <select value={propertyDetails.property2rate} onChange={changeHandler} name='property2rate' className='selectsteel-selector'>
                            <option value="">Select a rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>

                <div className='selectsteel-priority'>
                    <div className='selectsteel-itemfield'>
                        <p>Priority Three</p>
                        <select value={propertyDetails.property3} onChange={changeHandler} name='property3' className='selectsteel-selector'>
                            <option value="">Select a property</option>
                            <option value="property_ratings.corrosion_resistence">Corrosion Resistence</option>
                            <option value="property_ratings.durability">Durability</option>
                            <option value="property_ratings.weldability">Weldability</option>
                            <option value="property_ratings.strengthByWeight">Strength by weight</option>
                            <option value="property_ratings.strengthByCost">Strength by Cost</option>
                        </select>
                    </div>
                    <div className='selectsteel-itemfield'>
                        <p>Rating</p>
                        <select value={propertyDetails.property3rate} onChange={changeHandler} name='property3rate' className='selectsteel-selector'>
                            <option value="">Select a rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
                <div className='selectsteel-priority'>
                    <div className='selectsteel-itemfield'>
                        <p>Priority Four</p>
                        <select value={propertyDetails.property4} onChange={changeHandler} name='property4' className='selectsteel-selector'>
                            <option value="">Select a property</option>
                            <option value="property_ratings.corrosion_resistence">Corrosion Resistence</option>
                            <option value="property_ratings.durability">Durability</option>
                            <option value="property_ratings.weldability">Weldability</option>
                            <option value="property_ratings.strengthByWeight">Strength by weight</option>
                            <option value="property_ratings.strengthByCost">Strength by Cost</option>
                        </select>
                    </div>
                    <div className='selectsteel-itemfield'>
                        <p>Rating</p>
                        <select value={propertyDetails.property4rate} onChange={changeHandler} name='property4rate' className='selectsteel-selector'>
                            <option value="">Select a rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
                <div className='selectsteel-priority'>
                    <div className='selectsteel-itemfield'>
                        <p>Priority Five</p>
                        <select value={propertyDetails.property5} onChange={changeHandler} name='property5' className='selectsteel-selector'>
                            <option value="">Select a property</option>
                            <option value="property_ratings.corrosion_resistence">Corrosion Resistence</option>
                            <option value="property_ratings.durability">Durability</option>
                            <option value="property_ratings.weldability">Weldability</option>
                            <option value="property_ratings.strengthByWeight">Strength by weight</option>
                            <option value="property_ratings.strengthByCost">Strength by Cost</option>
                        </select>
                    </div>
                    <div className='selectsteel-itemfield'>
                        <p>Rating</p>
                        <select value={propertyDetails.property5rate} onChange={changeHandler} name='property5rate' className='selectsteel-selector'>
                            <option value="">Select a rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
            </div>

            <button onClick={bestMatchSteel} className='selectsteel-btn'>FIND STEEL</button>
            {matchingSteel && matchingSteel.length === 0 &&
                <div className='selectsteel-rating'>
                    <h2>
                        No steel found
                    </h2>
                </div>}
            {matchingSteel && matchingSteel.length > 0 &&
                <div className='selectsteel-rating'>
                    <h2>
                        Steel matching your design priority are  {matchingSteel.map((item,i) => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </h2>
                </div>}
        </div>
    )


}

export default SelectSteel