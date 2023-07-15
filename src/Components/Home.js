import React from 'react'
import Navigationbar from './Navigationbar'
import Filter from './Filter'
import { Cartstate } from './Context'
import Product from './Product'

function Home() {
  const {state:{products},productState:{sort,stock,searchQuery}}=Cartstate()
  console.log(products)
  const transformproducts=()=>{
    let sortedproducts=products
    if(sort){
      sortedproducts=sortedproducts.sort((a,b)=>
      sort==='lowtohigh'?a.Price-b.Price:b.Price-a.Price)
    }
    if(!stock){
      sortedproducts=sortedproducts.filter((prod)=>prod.stock)
    }
    if(searchQuery){
      sortedproducts=sortedproducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedproducts
  }
  return (
    <div>
        <Navigationbar/>
        <div className='row mt-1'>
          <div className='col-2 bg-dark'>
            <Filter/>
          </div>
          <div className='col-10 d-flex gap-4 flex-wrap justify-content-evenly'>
            {
              transformproducts().map((prod)=>{
                return(
                  <Product prod={prod} key={prod.id}/>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Home