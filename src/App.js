
import './App.css';
import {Navbar} from 'react-bootstrap'
import Search from './Search';
import { useState } from 'react';
import axios from 'axios'
import Result from './Result';
import Detail from './Detail';
import image from "./assets/popcorn.jpg"




function App() {
  const [state,setState] = useState({
    search:'',
    results: [],
    selected:{}
  })
  const handleInput = (event) =>
  {
    let search = event.target.value;
    setState ((prevState)=>{
      return {...prevState,search:search}
    })
  }


  const openDetail =(id) =>{
   axios.get('http://www.omdbapi.com/?i='+id+'&apikey=40643f59')
   .then(({data})=>{
    setState((prevState) =>{return {...prevState,selected:data}})

   })
   .catch(err => console.log(err))

  }
  const SearchResult =(event)=>{
 if(event.key ==="Enter"){
 axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=40643f59'+"&s=" +state.search)
 .then(res=>{
  setState(prevState =>{
    return {...prevState,results :res.data.Search};
  })
 })
 .catch(err =>console.log(err))
 }
    
  }

  const close =() =>{
    setState((prevState) =>{return {...prevState,selected:{}}})
  }
  return (
    <div className="w-100 main-wrapper d-flex flex-column align-items-center
   min-vh-100">
    {typeof state.selected.Title !="undefined" ? <Detail selected ={state.selected} close={close}/>:
      <header className="w-100 text-center text-white mt-5">
             <h2>Movie Search</h2>
             <img width={100} src={image}/>
             <Search handleInput= {handleInput} SearchResult={SearchResult}/>
             <div className="container">
              <div className="row">
             {
              state.results.map((result,i)=>(
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 my-2">
                  <Result result={result} openDetail={openDetail}/>
                  </div>
              ))
            }
             
              </div>
             </div>
      </header>
}
    </div>
  );
}

export default App;
