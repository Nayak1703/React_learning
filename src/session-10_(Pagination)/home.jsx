import React from 'react'
import Album from './album'
import Photos from './photo'
import {Routes, Route} from 'react-router-dom'

const Home = () => {
    return (
        <Routes>
            <Route path="/" element={<Album/>}/>
            <Route path="/photos/:albumId" element={<Photos/>} />
        </Routes>
    )
}

export default Home