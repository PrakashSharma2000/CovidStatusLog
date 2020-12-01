import React, { useState,useEffect} from 'react'
import Header from './component/Header'
import Books from './component/Books'
import './App.css'
import axios from 'axios'
import Pagination from './component/Pagination'




function App() {
 
  const [items,setItems] =useState([])
  const [isLoading,setIsLoading]=useState(true)

//Pagination part
  const [currentPage, setcurrentPage]=useState(1)
  const [page]=useState(12)

  useEffect( () => {
    const fetchItems =async () =>{
      const result = await axios(`https://covid19-api.org/api/status`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  const indexOfLastPage = currentPage * page;
  const indexofFirstPage = indexOfLastPage - page;
  const currentPost = items.slice(indexofFirstPage ,indexOfLastPage);

 
  const paginate = pageNumber => setcurrentPage(pageNumber);

  return (
    <div className="App">
      <Header/>
      <Books isloading={isLoading} items={currentPost} />
      <Pagination postsPerPage={page} totalpage ={items.length} paginate={paginate}/>
      
    </div>
  );
}



export default App;
