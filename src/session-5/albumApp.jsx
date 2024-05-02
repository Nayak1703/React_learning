import React, { useState, useEffect } from "react";
import "./albumApp.css";
import PhotoApp from "./photoApp.jsx";

// function component of Album
const AlbumApp = () => {
  // defining the state of the component to store album data
  const [albumData, setAlbumData] = useState([]);
  // defining another state of the component to store selected album-id
  const [selectedAlbumId, setSelectedAlbumId] = useState("");

  // fetchng the album data to state of the component
  const fetchingAlbumData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await response.json();

    setAlbumData(data);
  };

  // want to store album 1st time after dom get render
  useEffect(() => {
    fetchingAlbumData();
  }, []);

  return (
    <div>
      <h2>Albums:</h2>
      {/* if we directly print {albumData} this will give error, because {albumData} have objects.
        jsx will confuse that how to print object on webpage. jsx only allow html syntax to print*/}
      <div className="albumsList">
        {/* so we will use map method with html to print the value of objects in webpage  */}
        {albumData
          .map((album) => {
            return (
              <p
              // A key is a unique identifier.
              // In React, it is used to identify which items have changed, updated, or deleted from the Lists. 
                key={album.id}
                className="albums"
                onClick={() => setSelectedAlbumId(album.id)}
              >
                {album.title}- <span>{album.id}</span>
              </p>
            );
          })
          .slice(0, 10)} {/* using slice method, to slice the array*/} 
      </div>
      <h2>Photos of Album Id-{selectedAlbumId} :</h2>

          {/* call the another component(PhotoApp) and passed the props which is (selectedAlbumId) to it */}
      <PhotoApp albumId={selectedAlbumId} />
    </div>
  );
};

export default AlbumApp;
