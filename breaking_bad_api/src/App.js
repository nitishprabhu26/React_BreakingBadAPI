import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header'
// axios returns a promise
import axios from 'axios'

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
