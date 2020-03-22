import React from 'react'
import useGet from './useGet'

const url = 'https://mymoney-wls.firebaseio.com/moves.json'

function App() {
  const data = useGet(url)  

  if(data.loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>My money</h1>
      {JSON.stringify(data)}
    </div>
  )
}

export default App
