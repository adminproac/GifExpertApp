import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {
  const [inputNombre, setinputNombre] = useState('')
  const [categories, setCategories] = useState([])
 
  const actualizarArregloCategorias=(e)=>{
      e.preventDefault()
      setCategories((category)=>([inputNombre,...category]))  
      setinputNombre('')
  }

   return (
    <div className='container'>
        <h1>GifExpertApp</h1>
        <div className='row'>
          <div className='col-md-4'>
            <form onSubmit={actualizarArregloCategorias}>
              <label>Category</label>
              <input  className='form-control' 
                      type='text' 
                      value={inputNombre} 
                      onChange={(e)=>(setinputNombre(e.target.value))}/>
            </form>              
               {/* <AddCategory setCategories={setCategories}/>      */}
          </div>
        </div>
        <div className='row'>
            <div className='col-md-4'>
                <ul className="list-group">
                    {
                    categories.map((category)=>(<GifGrid key={category} category={category} />))  
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}