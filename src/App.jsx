import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsComponent from '../../NewsComponent'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DevComponent from './components/DevComponent';
import './App.css'

export class App extends Component {
  render() {
    return (<>
       <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<DevComponent  key="technology" pageSize={6} tag="web3"/>} />
        <Route path="/html" element={<DevComponent key="html"  pageSize={6} tag="html"/>} />
        <Route path="/css" element={<DevComponent key="css"  pageSize={6} tag="css"/>} />
        <Route path="/js" element={<DevComponent key="js"  pageSize={6} tag="js"/>} />
        <Route path="/node" element={<DevComponent key="node"  pageSize={6} tag="node"/>} />
        <Route path="/react" element={<DevComponent key="react"  pageSize={6} tag="react"/>} />
        <Route path="/angular" element={<DevComponent key="angular"  pageSize={6} tag="angular"/>} />
        <Route path="/vue" element={<DevComponent key="vue"  pageSize={6} tag="vue"/>} />
        <Route path="/svelte" element={<DevComponent key="svelte"  pageSize={6} tag="svelte"/>} />
        <Route path="/express" element={<DevComponent key="express"  pageSize={6} tag="express"/>} />
      </Routes>
    </BrowserRouter>

      
      </>
    )
  }
}

export default App