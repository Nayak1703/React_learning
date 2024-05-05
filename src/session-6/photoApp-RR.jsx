import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../session-5/albumApp.css'

// importing useParams hook to access the urlparams (parameters in url)
import { useParams } from 'react-router-dom'

const PhotoApp_RR = () => {
    const [photoData, setPhotoData] = useState([])
    // const {albumId} = props --> dont need props because we are not passing the props while calling the component

    // accessing the params using useParams() hook
    // useParams() hook return the object so we are destructing the object, we can have multiple params.
    // params value are always in string.
    const {albumId} = useParams()

    const fetchingPhotos  = async () => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        // since params value are always in string so it is not satisfying === condition we have to convert param to number
        let filterData = response.data.filter((photo) => photo.albumId === parseInt(albumId))
        setPhotoData(filterData)
    }

    useEffect(()=>{
        fetchingPhotos();
    },[albumId])
    return(
        <div>
            <h2>Photos of Album-{albumId}</h2>
            <div className="photoList">
                {photoData.map((photo)=>{
                    return (
                        <div className="photoCard" key={photo.id}>
                            <img src={photo.url}/>
                            <p>{photo.title}</p>
                        </div>
                    )
                }).slice(0,10)}
            </div>
        </div>
    )
}

export default PhotoApp_RR;