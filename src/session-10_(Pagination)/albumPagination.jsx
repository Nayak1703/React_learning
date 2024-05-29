import React from 'react';

const AlbumPagination = ({ album, paginateFunc, perPage }) => {

    const albumPage = [];

    for (let i = 1; i <= Math.ceil(album.length / perPage); i++) {
        albumPage.push(i)
    }

    return (
        <ul className="albumPageNumDiv">
            {albumPage.map((number) => {
                {
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