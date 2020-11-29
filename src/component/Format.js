import React from 'react'

const Format = ({item}) => {
    return (
        <div className="container">
       
            <div className="card">
              <ul>
                  <li><strong>Country:</strong> {item.country}</li>
                  <li><strong>Cases:</strong> {item.cases}</li>
                  <li><strong>Deaths:</strong> {item.deaths}</li>
                  <li><strong>Recovered:</strong> {item.recovered}</li>
                  <li><strong>Last Status: </strong>{item.last_update}</li>
              </ul>
            </div>
        
        </div>
    )
}

export default Format
