import React,{useEffect, useState} from 'react';
import './photos.css';
import {useParams} from "react-router-dom";
import PhotoPagination from './photoPagination'

const Photos = () => {
    const [photoData, setPhotoData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);
    const [loading, setLoading] = useState(false)

    const {albumId} = useParams()

    const lastSlice = currentPage * perPage
    const firstSlice = lastSlice - perPage

    const pagination = (number) => {
        setCurrentPage(number)
    }
    
    const fetchingPhotoData = async () => {
        try {
            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/photos")
            const Data = await response.json()
            // const photoData = data.filter((photo)=>photo.albumId === parseInt(albumId))
            setPhotoData(Data)
        }
        catch(error) {
            alert(error)
        }
        finally{
            setLoading(false)
        }
    } 

    useEffect(()=>{
        fetchingPhotoData()
    },[albumId])

    return (
        <div className="photos">
        <h2 className="photoHead">Photos of Album-{albumId}</h2>
        <div className="photoParent">
            {photoData.map((photo)=>{
                return (
                    <div className="photoCard" key={photo.id}>
                        <img src={photo.url}/>
                        <p>{photo.title}-{photo.id}</p>
                    </div>
                )
            }).slice(firstSlice,lastSlice)}
        </div>

        <div className="photoPage">
                {loading?<p>Loading...</p>:<PhotoPagination photo={photoData} pages={perPage} paginate={pagination}/>}        
        </div>
        </div>
    )
}

export default Photos