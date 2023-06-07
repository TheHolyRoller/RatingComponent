import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Rating from './Components/Rating'
import MyRating from './Components/MyRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    {/* Add in the rating component here  */}
    {/* <Rating/> */}
    <MyRating/>
    </div>
  )
}

export default App
