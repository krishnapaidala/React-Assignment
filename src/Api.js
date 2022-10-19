import React, { useEffect, useState } from "react"
import './App.css';
const UsingFetch = () => {
  const [users, setUsers] = useState({})

  const fetchData = () => {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
      .then(response => {
        return response.json()
      })
      .then(data => {
        
        var arr=[]
        console.log(JSON.stringify(data))
        //arr.push(data["Time Series (5min)"])
        setUsers(data["Time Series (5min)"])
        console.log(users)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        <table class="table table-bordered ">
            <thead >
                <th> DateTime</th>
                <th> Open</th>
                <th> High</th>
                <th> Low</th>
                <th> Close</th>
                <th> Volume</th>
            </thead>
            <tbody>
            {Object.keys(users).map(function(key, index) {
                    return (
                        <tr key={index}>
                            <td>{key}</td>
                            {Object.values(users[key]).map(function(key2) {
                                return (
                                    <td>{key2}</td>
                                )
                            })}
                        </tr>
                    )})

                }
          
          
                
            </tbody>
        </table>
    </div>
  )
}

export default UsingFetch
