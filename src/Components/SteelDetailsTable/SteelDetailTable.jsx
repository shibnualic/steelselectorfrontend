import React from 'react'
import './SteelDetailsTable.css'

const SteelDetailTable = (props) => {
    return (
        <div>
            <h3>Properties for selected steel Guage: {props.selectedSteel.gauge}   surfaceTreatment: {props.selectedSteel.surface_treatment}   category: {props.selectedSteel.category} </h3>
            <div className="table">
                <div className="table-header">
                    <div className="header__item header">Physical Property</div>
                </div>

                <div className="table-header">
                    <div className="header__item">Property</div>
                    <div className="header__item">Property Value</div>
                </div>
                <div className="table-content">
                    {Object.keys(props.selectedSteel.property_values).map(key => (
                        <div key={key} className='table-row'>
                            <div className="table-data">{key}</div>
                            <div className="table-data">{props.selectedSteel.property_values[key]}</div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="table">
                <div className="table-header">
                    <div className="header__item header">Property ratings</div>
                </div>
                <div className="table-header">
                    <div className="header__item">Property</div>
                    <div className="header__item">Rating</div>
                </div>
                <div className="table-content">
                    {Object.keys(props.selectedSteel.property_ratings).map(key => (
                        <div key={key} className='table-row'>
                            <div className="table-data">{key}</div>
                            <div className="table-data">{props.selectedSteel.property_ratings[key]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SteelDetailTable
