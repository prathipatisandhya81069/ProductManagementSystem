import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({cart,setCart,setItems}) => {
  const foodItems = [
    {
      name: "Burger",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      price: 120
    },
   
    {
      name: "French Fries",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
      price: 80
    },
    {
      name: "Sandwich",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
      price: 100
    },
    {
      name: "Pasta",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
      price: 180
    },
 
    
    {
      name: "Dosa",
      img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
      price: 70
    },
    {
      name: "Idli",
      img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
      price: 40
    },
    {
      name: "Samosa",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      price: 25
    },
    {
      name: "Fried Rice",
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
      price: 150
    },
    {
      name: "Noodles",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
      price: 130
    },
    {
      name: "Tacos",
      img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
      price: 160
    },
    {
      name: "Pancakes",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
      price: 140
    },
    {
      name: "Donut",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      price: 60
    },
    {
      name: "Ice Cream",
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      price: 90
    },
    {
      name: "Chocolate Cake",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      price: 100
    },
    {
      name: "Chicken Wings",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
      price: 200
    },
    {
      name: "Salad",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      price: 120
    },
    {
      name: "Pav Bhaji",
      img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
      price: 90
    }
  ];
  const navigate=useNavigate();
  const [search,setSearch]=useState('')
  function handleClick(product){
    setCart([...cart,product]);
  
    navigate("/cart")

  }

 function handleDetails(item1){
    setItems(item1);
    navigate("/details")
  }

  const filterdata=foodItems.filter((item)=>(
    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ))
  return (
    <div>
      <input type="text" placeholder='search product' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <div className='row align-items-center gap-5'>
        {filterdata.map((v, i) => (
          <div key={i} className='col'>
            <div className="card ">
              <img src={v.img} alt="" className='card-img-top' style={{ width: "300px",height:"200px" }} />
              <h4 className="card-text">{v.name}</h4>
              <p className="card-text">{v.price}</p>
              <button className='bg-success' onClick={()=>handleClick(v)}>AddTocart</button> <br />
              <button className='bg-warning' onClick={()=>handleDetails(v)}>View Details</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Home