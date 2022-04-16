import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    
    const {data:images,loading} = useFetchGifs(category)

    return (
    <div>
        <h2>{category}</h2>
        {loading && <p>cargando...</p>} 
        {
            images.map((img)=>(<GifGridItem key={img.id} img={img}/>))
        }
    </div>
)
}   
