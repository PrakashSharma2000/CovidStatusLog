import React, { useState,useEffect} from 'react'
import Header from './component/Header'
import Books from './component/Books'
import './App.css'
import MyChart from './component/MyChart'
import axios from 'axios'

function App() {
  const data =[
    1,2,3,4,5,6,7,8,9,0
  ]
  const [items,setItems] =useState([])
  const [isLoading,setIsLoading]=useState(true)

  useEffect( () => {
    const fetchItems =async () =>{
      const result = await axios(`https://covid19-api.org/api/status`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])


  return (
    <div className="App">
      <Header/>
      <Books isloading={isLoading} items={items} data={data} key={items.id}/>
      
    </div>
  );
}

export default App;
