import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import BlankScreen from './components/BlankScreen';
import Homepage from './components/Homepage';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';


import HashLoader from "react-spinners/HashLoader";

import './assets/css/global.scss';
import Skills from './components/Skills';

function App() {

  const [loading, setLoading] = React.useState(true);
  const [showHome, setShowHome] = React.useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 3000)

  }, [])

  useEffect(()=>{
    if(!showHome){
      setTimeout(()=>{
        setShowHome(true);
      },3000)
    }
  },[setLoading])


  return (
    <div id="app">{
        loading ?  

        <div id="loader">
           <HashLoader color={"#ffffff"} loading={loading}  size={150} />
        </div>

        :
          <>
            {showHome && 
            <div className="outerContainer">
              <Homepage className={showHome ? 'display-none' : ''}/>
              <About/>
              <Education/>
              <Skills/>
              <Projects/>
              <Contact/>
             </div>
             }
          </>
        }
        </div>
  );
}

export default App;
