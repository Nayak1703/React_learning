import React from 'react'

const PhotoPagination = ({photo,pages,paginate}) => {

    const photoPage = [];
    for(let i=1; i<=Math.ceil(photo.length/pages); i++) {
        photoPage.push(i)
    }

    return (
        <ul className="photoPageNumDiv">
            <li className="photoNum" onClick={() => paginate(1)}>1</li>
            <li className="photoNum" onClick={() => paginate(2)}>2</li>
            <li className="photoNum" onClick={() => paginate(3)}>3</li>
            <li className="photoDot">.</li>
            <li className="photoDot">.</li>
            <li className="photoDot">.</li>
            <li className="photoNum" onClick={() => paginate(photoPage.length-2)}>{photoPage.length-2}</li>
            <li className="photoNum" onClick={() => paginate(photoPage.length-1)}>{photoPage.length-1}</li>
           <li className="photoNum" onClick={() => paginate(photoPage.length-0)}>{photoPage.length-0}</li>
        </ul>
    )
}

export default PhotoPagination


// {photoPage.map((number) => {
//     {
//         // if (number < 4 || number > photoPage.length - 3)
//         //     return (<li className="photoNum" onClick={() => paginate(parseInt(number))} key={number}>{number}</li>)
//         // else
//         //     return (<li className="photoDot" key={number}>.</li>)

//         return (
//             <>
//             <li className="photoNum" onClick={() => paginate(1)} key={1}>1</li>
//             <li className="photoNum" onClick={() => paginate(2)} key={2}>2</li>
//             <li className="photoNum" onClick={() => paginate(3)} key={3}>3</li>
//             <li className="photoDot" key={number}>.</li>
//             <li className="photoDot" key={number}>.</li>
//             <li className="photoDot" key={number}>.</li>
//             <li className="photoNum" onClick={() => paginate(photoPage.length-2)} key={photoPage.length-2}>{photoPage.length-2}</li>
//             <li className="photoNum" onClick={() => paginate(photoPage.length-1)} key={photoPage.length-1}>{photoPage.length-1}</li>
//             <li className="photoNum" onClick={() => paginate(photoPage.length-0)} key={photoPage.length-0}>{photoPage.length-0}</li>
//             </>

//         )
//     }
// })}