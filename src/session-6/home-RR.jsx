import  React, { Component } from 'react';
import AlbumApp_RR from './albumApp-RR.jsx'
import PhotoApp_RR from './photoApp-RR.jsx';
// to define routes(path of different page inside website) we have to import 2 component i.e route(s), route.
import {Routes,Route} from 'react-router-dom'


const Home = () => {
    return (
        // defining the routes, we can have multiple route (is it based on number of path we want inside our website)

        // all our route will come inside the <Routes> </Routes> component,in this case we are having 2 route
        // so 2 route will come inside the <Routes> </Routes> component
        <Routes>
        {/* route -> to define the path(route) and, link the path with realted compoenent */}
        {/* it takes 2 props, path (define the path) &  element (assign element/html to define path) */}

            {/* when user is in / (root-path) in react-web-app, <AlbumApp_RR/> should load*/}
            <Route path='/' element={<AlbumApp_RR/>}/>
            {/* 
                when user is in /photos in react-web-app, <PhotoApp_RR/> should load.
                
                now we have to dynamicly add albumId in url based on clicked on album to do that add
                : (colon) -> tells react that this route will be dynamic.
                :variable -> variable will store the value which is passed in route inside link in <albumApp_RR.jsx/> component
            */}
            <Route path='/photos/:albumId' element={<PhotoApp_RR/>}/> {/* see the <PhotoApp_RR/> component */}
        </Routes>
    )
};

export default Home;