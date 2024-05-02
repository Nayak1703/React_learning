import React, {useState,useEffect} from 'react'

const PhotoApp = (props) => {
    const { albumId } = props;
    const [photoData, setPhotoData] = useState([]);

    const fetchingPhoto = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await response.json()
        const filterData = data.filter((photo)=> photo.albumId === albumId)
        setPhotoData(filterData)
    }
    useEffect(()=>{
        fetchingPhoto()
    },[albumId])
    return (
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
    )
}

export default PhotoApp;