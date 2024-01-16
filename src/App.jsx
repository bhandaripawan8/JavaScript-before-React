// this is a root component

import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import State from './components/state'


function App() {
  return (
    <>
        <Navbar/>
        <div className="content">
        <Home/>
        <State/>
        </div>

    </>
   
  )
}

export default App

// function App() {

//   return (
//     <>
//     <h2>Hello Pawan, welcome to Js Refresher</h2>
//     <h1>Hello</h1>
//     </>
//   )
// }

// export default App
