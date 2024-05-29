import React, {useState, useEffect} from 'react'
import './album.css'
import {Link} from 'react-router-dom'
import AlbumPagination from './albumPagination'

const Album = () => {

    const [albumData, setAlbumData] = useState([])
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [albumPerPage] = useState(10);

    const paginateFunc = (number) => setCurrentPage(number)

    const lastSlice =  currentPage * albumPerPage;
    const firstSlice = lastSlice-albumPerPage;

    const fetchingAlbumData = async () => {
        try {
            setLoading(true)
            let response = await fetch("https://jsonplaceholder.typicode.com/albums");
            let responseData = await response.json()
            setAlbumData(responseData)
        }
        catch(error) {
            alert(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect (()=>{
        fetchingAlbumData()
    },[])
    return (
        <div className="album">
            <h2 className="albumHead">Albums</h2>
            <div className='albumParent'>
            {
                albumData.map((album)=>{
                    {
                        return (
                            <Link to={`/photos/${album.id}`} key={album.id} className="albumCard">
                                <p >{album.title}-{album.id}</p>
                            </Link>
                        )
                    }
                }).slice(firstSlice,lastSlice)
            }
            </div>
            <div className="albumPage">
                {loading?<p>Loading...</p>:<AlbumPagination album={albumData} paginateFunc={paginateFunc} perPage={albumPerPage}/>}
                
            </div>
        </div>
    )
}

export default Album