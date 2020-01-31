import './styles.css'
import React, {useState, useEffect} from 'react'
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'


function App() {
  const [numVoltas, setNumVoltas] = useState(14)
  
  const [running, setRunning] = useState(false)
  
  const [tempo, setTempo] = useState(0)

  useEffect(() => { //efeito colateral de running
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) { //truthy valor que é convertido para verdadeiro
        clearInterval(timer)
      }
    }
  }, [running])
  
  const toggleRunning = () => {
    setRunning(!running)
  }
  const increment = () => {
    setNumVoltas(numVoltas + 1);  
  }
  const decrement = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1);
    }
  }
  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }    
  return (
    <div className='App'>
      <MostraVoltas voltas={numVoltas} />
      <Button text='+' className='bigger' onClick={increment} />
      <Button text='-' className='bigger' onClick={decrement} />
      {
        numVoltas > 0 && <MostraTempo tempo={Math.round(tempo/numVoltas)} />
      }
      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} /> 
      <Button text='Reiniciar' onClick={reset} /> 
    </div>
  )
}

export default App
