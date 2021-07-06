import React, {useEffect} from 'react';

import Main from './pages/main';


import 'bootstrap/dist/css/bootstrap.min.css';
import HashLoader from "react-spinners/HashLoader";

function App() {

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div id="app">{
        loading ?  

        <div id="loader">
           <HashLoader color={"#4A90E2"} loading={loading}  size={150} />
        </div>

        :
          <Main/>
        }
        </div>
  );
}

export default App;
