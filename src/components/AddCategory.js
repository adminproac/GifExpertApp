import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {
  const [inputNombre, setinputNombre] = useState('')
  const Agregar=(e)=>{
      e.preventDefault()
      setCategories((category)=>([inputNombre,...category]))  
      setinputNombre('')
  }

  return (
    <form onSubmit={Agregar}>
        <div>
            <label>Category</label>
            <input  className='form-control' 
                    type='text' 
                    value={inputNombre} 
                    onChange={(e)=>(setinputNombre(e.target.value))}/>
        </div>
    </form>  
  )
}
