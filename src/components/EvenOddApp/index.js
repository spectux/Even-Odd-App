import {useState} from 'react'
import './index.css'

const EvenOddApp = () => {
  const [count, setCount] = useState(0)
  const [isEven, setIsEven] = useState(true)

  const handleIncrement = () => {
    const randomValue = Math.floor(Math.random() * 101)
    const newCount = count + randomValue
    setCount(newCount)
    setIsEven(newCount % 2 === 0)
  }

  return (
    <div className="even-odd-container">
      <h1 className="heading">Count {count}</h1>
      <div className="count-container">
        <p className="count-text">Count is {isEven ? 'Even' : 'Odd'}</p>
      </div>
      <button className="increment-button" onClick={handleIncrement}>
        Increment
      </button>
      <p className="random-text">
          Increase By Random Number Between 0 to 100
        </p>
    </div>
  )
}

export default EvenOddApp
