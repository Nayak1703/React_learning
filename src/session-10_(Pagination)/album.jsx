import React, {useState, useEffect} from 'react'
import './album.css'
import {Link} from 'react-router-dom'   // using Link for Routing
import AlbumPagination from './albumPagination'

const Album = () => {

    // made state to store all the album's json data in array format
    const [albumData, setAlbumData] = useState([])

    // made state to keep track the time taken to fetch the album's data through api
    const [loading, setLoading] = useState(false);

    // made state to keep track of current page user selected, by default it is 1
    const [currentPage, setCurrentPage] = useState(1);

    // made state, to store the number of the cards to show in per page
    const [albumPerPage] = useState(10);

    // made this arrow function, to update "currentPage" state, this function is passed as a prop to child component
    const paginateFunc = (number) => setCurrentPage(number)

    // since lots of data coming from the api, so we are going to show specify data based on "currentPage"
    // example: currentPage = 1 -> 1-10, currentPage = 2 -> 11-20, so on...
    // we can achive this with help of slice(from_index_number, till_index_number - 1) method.
    // so here we are calculating from_index_number && till_index_number - 1
    const lastSlice =  currentPage * albumPerPage;
    const firstSlice = lastSlice-albumPerPage;

    // fetching json data
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

    // fetchingAlbumData() should get called once after first render
    useEffect (()=>{
        fetchingAlbumData()
    },[])


    return (
        <div className="album">
            <h2 className="albumHead">Albums</h2>
            <div className='albumParent'>
            {  // traversing through each element of state "albumData" using map
                albumData.map((album)=>{
                    {
                        return (
                            // on click on the card go to `/photos/${album.id}` page
                            <Link to={`/photos/${album.id}`} key={album.id} className="albumCard">
                                <p >{album.title}-{album.id}</p>
                            </Link>
                        )
                    }
                }).slice(firstSlice,lastSlice)  // slicing the array based on page
            }
            </div>
            <div className="albumPage">
                {/* calling tha child component and passing 2 state (albumData, albumPerPage) and 1 function paginateFunc as prop */}
                {loading?<p>Loading...</p>:<AlbumPagination album={albumData} paginateFunc={paginateFunc} perPage={albumPerPage}/>}
            </div>
        </div>
    )
}

export default Album