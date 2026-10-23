import React from 'react'

const Cart = ({cart,setCart}) => {
    function handleClick(product){
        const updateitems=cart.filter((v,i)=> v!==product);
        setCart(updateitems)

    }
  return (
    <div>
          <div className='row align-items-center gap-5'>
        {cart.map((v, i) => (
          <div key={i} className='col'>
            <div className="card ">
              <img src={v.img} alt="" className='card-img-top' style={{ width: "500px",height:"200px" }} />
              <h4 className="card-text">{v.name}</h4>
              <p className="card-text">{v.price}</p>
              <button className="bg-danger" onClick={()=>handleClick(v)}>Delete Item</button>
             
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart