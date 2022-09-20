import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const[items,SetItem]= useState([]);
  useEffect(() => {
    const name= ['Ashik','Emon'];
    SetItem(name);
    console.log(items);

  } ,[])
   
  return(
    <div style={{margin:'30'}}>
    <h3>name</h3>
    <ul>
      {items.map(item=>(
        <li key={item}>
          {item}
          
          </li>
      ))}
      
      </ul>
    
      </div>

      }

  

export default App;
