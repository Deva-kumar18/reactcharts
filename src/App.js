import logo from './logo.svg';
import './App.css';
import BarChart from './components/Bar Chart/BarChart';
import { useState } from 'react';
import {UserData} from './Data'
import LineChart from './components/Line Chart/LineChart';
import PieChart from './components/Pie Chart/PieChart';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data)=> data.year) ,
    datasets:[{
      label:"Users Gained",
      data:UserData.map((data)=> data.userGain),
      backgroundColor:["green","red","yellow","purple","pink","blue"],
      borderColor:"black",
      borderWidth:2,
    }]
  })
  return (
    <div className="App">
      <div style={{width:"700px"}}>
      <BarChart chartData={userData}/>
      </div>
      <div style={{width:"700px"}}>
      <LineChart chartData={userData}/>
      </div>
      <div style={{width:"700px"}}>
      <PieChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;
