import React, { useEffect, useState } from 'react'
import './SheetMetalDetails.css'
import SteelDetailTable from '../SteelDetailsTable/SteelDetailTable';

const SheetMetalDetails = () => {

    const [allSteel, setAllSteel] = useState([]);
    const [selectionSteel, setSelectionSteel] = useState(allSteel);
    const [gauge, setGauge] = useState('');
    const [surfaceTreatment, setSurfaceTreatment] = useState('');
    const [category, setCategory] = useState('');
    const [selectedSteel, setSelectedSteel] = useState('');

    useEffect(() => {
        fetch('https://steelselectorbackend.onrender.com/allsteel', {
            method: 'GET'
        }).then((response) => response.json()).then((data) => {

            setAllSteel(data);
            setSelectionSteel(data);
        })
    }, [])
    useEffect(() => {
        const filteredOptions = allSteel.filter(option => {
            const matchesInput1 = gauge === '' || option.gauge.includes(gauge);
            const matchesInput2 = surfaceTreatment === '' || option.surface_treatment.includes(surfaceTreatment);
            const matchesInput3 = category === '' || option.category.includes(category);
            return matchesInput1 && matchesInput2 && matchesInput3;
        });
        setSelectionSteel(filteredOptions);
    }, [gauge, surfaceTreatment, category, allSteel])








    const UniqueSelectOptions = ({ data, property }) => {
        // Create a Set to store unique values
        const uniqueValues = new Set(data.map(item => item[property]));

        // Convert the Set back to an array for rendering
        const options = Array.from(uniqueValues);

        return (

            options.map((value, index) => (
                <option key={index} value={value}>
                    {value}
                </option>
            ))

        );
    }

    const changeHandlerGauge = (e) => {
        e.target.value ? setGauge(e.target.value) : setGauge('')
    }





    const findSteelDetails = () => {
        const a = allSteel.find(item => item.gauge === gauge && item.surface_treatment === surfaceTreatment && item.category === category);
        setSelectedSteel(a)
        setGauge('');
        setCategory('');
        setSurfaceTreatment('');
    }

    return (
        <div className='sheetmetaldetails'>
            <div className='sheetmetaldetails-details'>
                <div className='sheetmetaldetails-itemfield'>
                    <h2>Calculate design parameters</h2>
                    <h4>Enter all values in imperial unit system</h4>
                    <p>Gauge</p>
                    <select value={gauge} onChange={changeHandlerGauge} name='guage' className='sheetmetaldetails-selector'>
                        <option value="">Select guage</option>
                        <UniqueSelectOptions data={selectionSteel} property='gauge' />
                    </select>
                    <p>Surface treatment</p>
                    <select value={surfaceTreatment} onChange={(e) => { e.target.value ? setSurfaceTreatment(e.target.value) : setSurfaceTreatment('') }} name='surface_treatment' className='sheetmetaldetails-selector'>
                        <option value="">Select surface Coating</option>
                        <UniqueSelectOptions data={selectionSteel} property='surface_treatment' />
                    </select>
                    <p>Category</p>
                    <select value={category} onChange={(e) => { e.target.value ? setCategory(e.target.value) : setCategory('') }} name='category' className='sheetmetaldetails-selector'>
                        <option value="">Select category</option>
                        <UniqueSelectOptions data={selectionSteel} property='category' />

                    </select>
                </div>
                <button className='sheetmetaldetails-btn sheetmetaldetails-selector ' onClick={findSteelDetails}>Find steel details</button>
                {selectedSteel && <SteelDetailTable selectedSteel={selectedSteel} />}
            </div>

        </div>
    )
}

export default SheetMetalDetails
