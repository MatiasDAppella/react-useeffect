import './App.css'
import { useState } from 'react'
import Dialog from './components/Dialog'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={handleClick}>
        Open dialog
      </button>
      <Dialog isOpen={isOpen} closeDialog={handleClick}>
        <img src="https://images.ctfassets.net/sfnkq8lmu5d7/1NaIFGyBn0qwXYlNaCJSEl/ad59ce5eefa3c2322b696778185cc749/2021_0825_Kitten_Health.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg" alt="kitten" />
      </Dialog>
    </>
  )
}

export default App
