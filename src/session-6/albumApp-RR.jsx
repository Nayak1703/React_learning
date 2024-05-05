import React, { useState, useEffect } from "react";
import axios from "axios";
import "../session-5/albumApp.css";

// importing Link to navigate frm one-page to another
import { Link } from 'react-router-dom';

const AlbumApp_RR = () => {
    const [albumData, setAlbumData] = useState([]);
    const [selectedAlbumId, setSelectedAlbumId] = useState("");

    const fetchindAlbumData = async () => {
        let response = await axios.get(
            "https://jsonplaceholder.typicode.com/albums"
        );
        setAlbumData(response.data);
    };

    useEffect(() => {
        fetchindAlbumData();
    }, []);

    return (
        <div>
            <h2>Albums:</h2>
            <div className="albumsList">
                {albumData
                    .map((album) => {
                        {
                            /* requirement: when we click this we should go the <Photo_RR/> compoenent 
                                            and url also get updated to /photo*/
                        }

                        {
                            /* to achive that we have <Link></Link> component (given by react-router) it takes user from one page to other page 
                            just like <a></a> but dont reload the page.
                            
                            in backend <Link></Link> converted to <a></a> and stop the reloading of page.
                             <Link></Link> also have additional functionality than <a></a>
                            */

                        }

                        {/*
                            we dont need onclick beacuse it is handle by <Link></Link>
                
                            <Link></Link> is a component, it take a prop called to={path-of-the-component-u-want-to-go-onclick} */}
                        return (
                            <Link
                                to={`/photos/${album.id}`}
                                key={album.id}
                                className="albums"
                            >
                                <p >{album.title}- <span>{album.id}</span></p>
                            </Link>
                        );
                    })
                    .slice(0, 10)}
            </div>
            
            {/* we dont need to call below component because we are accessing this component with the help of react-route
                (routes,route,link)*/}
            {/* <PhotoApp_RR albumId={selectedAlbumId} />  */}

            {/* 
                as u can see we are passing the props so that this component access the value of albumId and
                according to that render the photos realted to album which we have click
                
                but here we cant do that, The only way for <PhotoApp_RR /> to get the albumId is by URL  
                
                so how to pass albumId of album that we have selected in url?
                ->  for this we have "dynamic-routes"

                what are dynamic-routes?
                -> dynamc routes are those routes which are dynamic in nature 
                   (its value is not constant but keeps changing)

                how to define it -> see the Home.jsx
            */}

        </div>
    );
};

export default AlbumApp_RR;
