import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";


import "./Header.css";

function Header() {

  const [{ errore }, dispatch] = useStateValue();


    return(
      <div>
       <div  className="dmenu db">
                <div className="menuleft">
                <ul className="menu1link">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/starships">Starships</Link></li>
                <li><Link to="/vehicles">Vehicles</Link></li>
                <li><Link to="/populate" onClick={async()=>{
                  try {
                    await axios.get('https://server-swawpi.herokuapp.com/populate')

                  } catch (error) {
                    dispatch({type:'ERRORE',payload:"Problem on importing data in database from SWAPI Star War APi"})
                  }
    }               
                }>Import new data from SWAPI API to Database </Link></li>
                </ul>
                </div>
            
              </div>
              <h4>{errore}</h4>
      </div>
    )
    }
   
      
      
        
    
  
   
export default Header
