import React from 'react';
import "./Home.css";
import Sidebar from '../../Components/Sidebar/Sidebar'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectSteel from '../../Components/SelectSteel/SelectSteel';
import FormulaSelector from '../../Components/FormulaSelector/FormulaSelector';
import WieghtCalculator from '../../Components/WieghtCalculator/WieghtCalculator';
import SheetMetalDetails from '../../Components/SheetMetalDetails/SheetMetalDetails';


const Home = () => {
    return (

        <div className='home'>
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='/selectsteel' element={<SelectSteel />} />
                    <Route path='/desgincalculations' element={<FormulaSelector />} />
                    <Route path='/weightcalculations' element={<WieghtCalculator />} />
                    <Route path='/sheetmetaldetails' element={<SheetMetalDetails />} />
                </Routes>
            </BrowserRouter>

        </div>


    )
}

export default Home