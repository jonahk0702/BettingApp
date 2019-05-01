import React from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import Particles from 'react-particles-js';



const backgroundOptions = {
            		particles: {
            			number: {
            				value:150,
            				density: {
            					enable:true, 
            					value_area:800
            				}
            			}
            		}
            	}

function App() {
  return (
    <div>
    	
<NavBar/>
    <SignIn/>


    	<Particles className='particles'
              params={backgroundOptions}
              
            />

    
    
    </div>
    
  );
}

export default App;
