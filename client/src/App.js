

import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/navbar';

const App = () => {
    const [slidein, setslidein] = useState(true)
    useEffect(()=>{
        if(window.innerWidth<=768){
            setslidein(false)
        }
    },[])

    const handleSlideIn=()=>{
        if(window.innerWidth<=768){
            setslidein((state)=>!state)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default App




// function App(){
//     
//     return(
//         <div>
//             <Navbar />
//         </div>
//     )
// }