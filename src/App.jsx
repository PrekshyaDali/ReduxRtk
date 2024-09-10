import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import AllProducts from './components/AllProducts'
import AddProducts from './components/AddProducts'
import UpdateProducts from './components/UpdateProducts'

function App() {
  return (
    <>
      {/* <Counter></Counter>
      <AddProducts></AddProducts>
      <AllProducts></AllProducts> */}
      <UpdateProducts productId = {4}></UpdateProducts>
    </>
  )
}
export default App
