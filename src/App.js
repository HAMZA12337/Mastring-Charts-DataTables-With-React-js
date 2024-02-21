import { useEffect, useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

import Fcaller from "./SimpleCharts/Fcaller";
import TradChart from "./TradingCharts/TradChart";
import Table from "./Tables/Table";

function App() {

const actions = ["Cat1", "Cat2", "Tables"];
const [getCurrentRoute,setCurrentRoute]=useState();


useEffect(()=>{

 let path=window.location.pathname;
 path=path.slice(1,path.length)
 setCurrentRoute(path)
 
})

  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>HB</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {actions.map((action)=>(

            <li key={action} 
            
            onClick={()=>setCurrentRoute(action)}

            className="nav-item">
              <Link className={
                getCurrentRoute===action ? "nav-link text-dark ":"nav-link"
              }
              
              aria-current="page" to={"/"+action}>
                {action}
              </Link>
            </li>

            ))}
          
          </ul>
      
        </div>
      </div>
    </nav>
    <Routes>

<Route path="/Cat1" element={<Fcaller/>}> </Route>
<Route path="/Cat2" element={<TradChart/>}> </Route>
<Route path="/Tables" element={<Table/>}> </Route>
</Routes>
</BrowserRouter>

  );
}

export default App;

