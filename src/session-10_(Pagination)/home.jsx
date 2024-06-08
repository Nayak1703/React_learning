import React from 'react'
import Album from './album'
import Photos from './photo'
import {Routes, Route} from 'react-router-dom'  // using Routes and Route for routing in our web-app

const Home = () => {
    return (
        <Routes>
            {/* show <Album/> component in root (/) path */}
            <Route path="/" element={<Album/>}/>
            {/* show <Photos/> component in (/photos/:albumId) directory
                to show albumId dynamicly using ":" */}    
            <Route path="/photos/:albumId" element={<Photos/>} />
        </Routes>
    )
}

export default Home