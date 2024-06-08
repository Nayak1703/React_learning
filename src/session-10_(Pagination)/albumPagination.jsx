import React from 'react';

// access the props that were passed in parent component
const AlbumPagination = ({ album, paginateFunc, perPage }) => {
    // to store the numbers that will displayed on pagination based on numbers of elements in album's data and
    // elements will show perpage.
    const albumPage = [];

    // to push the element in array
    for (let i = 1; i <= Math.ceil(album.length / perPage); i++) {
        albumPage.push(i)
    }

    return (
        // ui for pagination
        <ul className="albumPageNumDiv">
            {albumPage.map((number) => {
                {
                    // adding page number in pagination and given the onClick functionality.
                    // this onClick-functionality is changing the state of the parent component
                    if (number < 4 || number > perPage - 3)
                        return (<li className="albumNum" onClick={() => paginateFunc(parseInt(number))} key={number}>{number}</li>)
                    else
                        return (<li className="albumDot" key={number}>.</li>)
                }
            })}
        </ul>
    )
}

export default AlbumPagination