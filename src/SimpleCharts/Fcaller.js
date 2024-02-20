import React from 'react'
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

export default function Fcaller() {
  return (
    <div className="container my-4">
    <div className="row my-4">
        <div className="col-6">
           
            <BarChart  />
        </div>
        <div className="col-6">
            
        <LineChart />
        </div>
        </div>
         {/* Second Bloc */}
        <div className="row" >
        <div className="col-12  justify-content-center" > 
            <PieChart />
        </div>
        
    </div>
</div>
  )
}
