import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer, productReducer } from './Reducers'

var Cart=createContext()
function Context({children}) {

const Vegetables=[
  {
    id:1,
    image:'/images/01.jpg',
    name:'coconut',
    desc:'fruit and Vegetable',
    Price:2.99,
    stock:10,
    qty:0
  },
  {
    id:2,
    name:'Soft creme cheese(200g)',
    image:'/images/02.jpg',
    desc:'Dairy and Eggs',
    Price:3.99,
    stock:8,
    qty:0
  },
  {
    id:3,
    image:'/images/03.jpg',
    name:'Pepsi Soda Can (30ml)',
    desc:'Soft Drink and Juice',
    Price:3.99,
    stock:18,
    qty:0
  },
  {
    id:4,
    image:'/images/04.jpg',
    name:'Fresh Orange (1kg)',
    desc:'Fruit and Vegetables',
    Price:1.75,
    stock:7,
    qty:0
  },
  {
    id:5,
    image:'/images/05.jpg',
    name:'Moisture body lotion',
    desc:'Personal Hygine',
    Price:3.50,
    stock:18,
    qty:0
  },
  {
    id:6,
    image:'/images/06.jpg',
    name:'Nut Chocolate Paste',
    desc:'Snack, Sweet and Chips',
    Price:3.99,
    stock:18,
    qty:0
  },
  {
    id:7,
    image:'/images/07.jpg',
    name:'Mozarella Mini Cheese',
    desc:'Dairy and Eggs',
    Price:4.99,
    stock:3,
    qty:0
  },
  {
    id:8,
    image:'/images/08.jpg',
    name:'Mozarella Mini Cheese (125g)',
    desc:'Dairy and Eggs',
    Price:4.20,
    stock:6,
    qty:0
  },
  {
    id:9,
    image:'/images/09.jpg',
    name:'Mens Shampoo (400ml)',
    desc:'Personal Hygine',
    Price:2.99,
    stock:8,
    qty:0
  },
  {
    id:10,
    image:'/images/10.jpg',
    name:'Frozen oven-ready Poultry',
    desc:'Meat and polutry',
    Price:0.99,
    stock:7,
    qty:0
  },
  {
    id:11,
    image:'/images/11.jpg',
    name:'Dark Chocolate with nuts',
    desc:'Snack, Sweet and Chips',
    Price:1.75,
    stock:7,
    qty:0
  },
  {
    id:12,
    image:'/images/12.jpg',
    name:'Corn Oil Bottle (500ml)',
    desc:'Canned Food Oil',
    Price:3.10,
    stock:4,
    qty:0
  },
  {
    id:13,
    image:'/images/13.jpg',
    name:'Stick Salmon Fillet (1kg)',
    desc:'Feash and sea food',
    Price:17.75,
    stock:9,
    qty:0
  },
  {
    id:14,
    image:'/images/14.jpg',
    name:'Sardine in Tomato Sauce',
    desc:'Canned Food and Oil',
    Price:3.35,
    stock:7,
    qty:0
  },
  {
    id:15,
    image:'/images/15.jpg',
    name:'Italian Past(500g)',
    desc:'Packets, Cereals',
    Price:2.99,
    stock:5,
    qty:0
  },
  {
    id:16,
    image:'/images/16.jpg',
    name:'Rice Cake with Chia Seeds',
    desc:'Packets, Cereals',
    Price:1.40,
    stock:4,
    qty:0
  }
  
]


// var Vegetables=[
//   {
//     id:1,
//     image:'/images1/01.jpg',
//     name:'Fenugreek',
//     desc:'Leaf Vegetables',
//     Price:20,
//     stock:25,
//     qty:0
//   },
//    {
//     id:2,
//     image:'/images1/02.jpg',
//     name:'Okra',
//     desc:'Vegetables',
//     Price:35,
//     stock:0,
//     qty:0
//   },
//    {
//     id:3,
//     image:'/images1/03.jpg',
//     name:'Mango',
//     desc:'Fruit',
//     Price:150,
//     stock:100,
//     qty:0
//   },
//    {
//     id:4,
//     image:'/images1/04.jpg',
//     name:'Sweet Potato',
//     desc:'Root Vegetables',
//     Price:100,
//     stock:15,
//     qty:0
//   },
//    {
//     id:5,
//     image:'/images1/05.jpg',
//     name:'Water-melon',
//     desc:'Fruit',
//     Price:35,
//     stock:50,
//     qty:0
//   },
//    {
//     id:6,
//     image:'/images1/06.jpg',
//     name:'Potato',
//     desc:'Root Vegetables',
//     Price:20,
//     stock:20,
//     qty:0
//   },
//    {
//     id:7,
//     image:'/images1/07.jpg',
//     name:'Coriender Leaves',
//     desc:'Leaf Vegetables',
//     Price:25,
//     stock:0,
//     qty:0
//   },
//    {
//     id:8,
//     image:'/images1/08.jpg',
//     name:'Noseberry',
//     desc:'Fruit',
//     Price:50,
//     stock:150,
//     qty:0
//   },
//    {
//     id:9,
//     image:'/images1/09.jpg',
//     name:'Spinach',
//     desc:'Leaf Vegetables',
//     Price:25,
//     stock:10,
//     qty:0
//   },
//    {
//     id:10,
//     image:'/images1/10.jpg',
//     name:'Green Peas',
//     desc:'Vegetables',
//     Price:45,
//     stock:30,
//     qty:0
//   },
//    {
//     id:11,
//     image:'/images1/11.jpg',
//     name:'Ginger',
//     desc:'Root Vegetables',
//     Price:30,
//     stock:20,
//     qty:0
//   },
//    {
//     id:12,
//     image:'/images1/12.jpg',
//     name:'Custard Apple',
//     desc:'Fruit',
//     Price:50,
//     stock:10,
//     qty:0
//   },
//    {
//     id:13,
//     image:'/images1/13.jpg',
//     name:'Garlic',
//     desc:'Root Vegetables',
//     Price:40,
//     stock:50,
//     qty:0
//   },
//    {
//     id:14,
//     image:'/images1/14.jpg',
//     name:'Raddish',
//     desc:'Root Vegetables',
//     Price:40,
//     stock:35,
//     qty:0
//   },
//    {
//     id:15,
//     image:'/images1/15.jpg',
//     name:'Cabbage',
//     desc:'Leaf Vegetables',
//     Price:20,
//     stock:25,
//     qty:0
//   },
//    {
//     id:16,
//     image:'/images1/16.jpg',
//     name:'Brinjal',
//     desc:'Vegetables',
//     Price:20,
//     stock:25,
//     qty:0
//   },
//    {
//     id:17,
//     image:'/images1/17.jpg',
//     name:'Dill',
//     desc:'Leaf Vegetables',
//     Price:35,
//     stock:25,
//     qty:0
//   },
//    {
//     id:18,
//     image:'/images1/18.jpg',
//     name:'Guava',
//     desc:'Fruit',
//     Price:50,
//     stock:10,
//     qty:0
//   },
//    {
//     id:19,
//     image:'/images1/19.jpg',
//     name:'Coconut',
//     desc:'Fruit',
//     Price:100,
//     stock:40,
//     qty:0
//   },
//    {
//     id:20,
//     image:'/images1/20.jpg',
//     name:'Mint',
//     desc:'Leaf Vegetables',
//     Price:50,
//     stock:20,
//     qty:0
//   }
// ]

var[state,dispatch]=useReducer(cartReducer,{
  products:Vegetables,
  cart:[]
})

var [productState,productDispatch]=useReducer(productReducer,{
  stock:false,
  searchQuery:' '
})
  return (
    <div>
      <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
        {children}
      </Cart.Provider>
    </div>
  )
}

export default Context
export var Cartstate=()=>{
  return useContext(Cart)
} 