import React from 'react'

export const GifGridItem = ({img}) => {
//   console.log(img)  
  return (
<div className="card-group">
  <div className="card">
    <img src={img.url} className="card-img-top" alt={img.title}/>
    <div className="card-body">
      <p className="card-text">{img.title}</p>
    </div>
  </div>
</div>
    )
}




