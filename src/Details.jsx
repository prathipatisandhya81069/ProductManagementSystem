import React from 'react'

const Details = ({item}) => {
  return (
    <div>
         <div className='row align-items-center gap-5'>
       
          <div className='col'>
            <div className="card ">
              <img src={item.img} alt="" className='card-img-top' style={{ width: "300px",height:"200px" }} />
              <h4 className="card-text">{item.name}</h4>
              <p className="card-text">{item.price}</p>
       
            </div>

          </div>
       
      </div>
    </div>
  )
}

export default Details