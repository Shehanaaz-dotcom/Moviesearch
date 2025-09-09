import React from 'react'
import './App.css'

function Result({result,openDetail}) {
  return (
    <div className="result" onClick={(e)=>openDetail(result.imdbID)}>
        <div className="border border-dark border-4">
        <img src={result.Poster} alt =""/>
        </div>

         <div className="name bg-dark text-white p-2 ">
        <h3>{result.Title}</h3>
        </div>
      
    </div>
  )
}

export default Result
