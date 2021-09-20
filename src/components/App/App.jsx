import React from 'react';
import axios from 'axios';
import './App.css';
// importing properties
import { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList.jsx';


// useState is a function provided by React
// const useState = React.useState;
// const useEffect = React.useEffect;

function App() {
  //destructuring galleryArray
  const [galleryImages, setGalleryImages] = useState ([]);

    const fetchGalleryImages = () => {
      axios({
        method: 'GET',
        url: '/gallery',
      }).then((response) => {
        console.log('pulling data from gallery ', response.data);
        //updating local state, will re-render the App.jsx
        setGalleryImages(response.data);
      }).catch((error) => {
        alert('Error making GET request.');
        console.log(error);
      })
    }
    // to call fetchGallery on load
    useEffect(() => {
      fetchGalleryImages();
    }, []);

    // const [counter, setCounter] = useState(0);
    // const handleLikeClick = () => {
    //   console.log('Clicked "Like" button!')
    //   setCounter(counter + 1);
    // }

    // PUT for incrementing photo like
    const likeImage = (photoId) => {
        console.log(photoId);
      axios({
        method: 'PUT',
        url: `/gallery/like/${photoId}`
      }).then((response) => {
        fetchGalleryImages();
      }).catch((error) => {
        alert('Error in incrementing photo like')
        console.log(error);
      })
    }


    // return in this case is our 'render' function
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <ul>
          <>
          <div>
            
           <GalleryList galleryImages={galleryImages} likeImage={likeImage} />
            
          </div>
          </>
        </ul>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;



// // My first attempt, had everything but conditional rendering with description toggle
//     // return in this case is our 'render' function
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Gallery of My Life</h1>
//         </header>
//         <ul>
//           <>
//           <div>
//             {
//             galleryArray.map( //{ toggleImgDesc ? (image.path) : (image.description) }

//               (image) => <div> <img key={image.path} src={image.path} /> 
//             <div>{ image.likes } people love it!</div>
//             <button onClick={ () => { incrementPhotoLike (image.id) }}>Love it!</button>
//             </div>)
//             }
//           </div>
//           </>
//         </ul>
//         {/* <img src="images/goat_small.jpg"/> */}
//       </div>
//     );
// }