import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Layout from './components/Layout'
import Settings from './components/Settings'
import Logs from './components/Logs'
import Videos from './components/Videos'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='settings' element={<Settings />} />
            <Route path='videos' element={<Videos />} />
            <Route path='logs' element={<Logs />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
