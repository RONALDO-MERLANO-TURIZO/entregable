
import { useState } from 'react'
import './App.css'
import quotes from './assets/components/quotes.json'

function App() {

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [ isChange, setIsChange ] = useState(randomIndex)
  //const isChange1 = (0)

  const alert = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIsChange(random)
    //isChange1 = (1)
  }

  const colors = [ "blue", "red", "grey", "yellow", "brown", "orange", "purple", "green", "pink" ]
  const ChangeColors = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[ChangeColors]}`

  return (
    <div className="App" style={{color: colors[ChangeColors]}}>
     <i class='bx bxs-quote-alt-left bx-lg'>
     </i>
     <div className="text">
      <h4>{quotes[isChange].quote}<p>{quotes[isChange].author}</p></h4>
     </div>
     <div>
      <i class='bx bx-chevrons-right bx-lg' onClick={alert}></i>
     </div>

    </div>
  )
}

export default App
