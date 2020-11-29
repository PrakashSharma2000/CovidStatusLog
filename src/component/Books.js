import React from 'react'
import Format from './Format'

const Books = ({items , isLoading}) => {
   return isLoading ? (<p>loading...</p>) : (<section className="cards">
         {items.map((item) => (
            <div>
            <Format className="books" key={item.id} item={item}/>
            
            </div>
         ))}
   </section>)
}
//
export default Books

