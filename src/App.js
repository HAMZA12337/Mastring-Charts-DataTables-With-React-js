import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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

  );
}

export default App;

{/* <div className="col-6" style="width: 100%; height: 100%;">
    <BarChart style="width: 100%; height: 100%;" />
</div> */}

