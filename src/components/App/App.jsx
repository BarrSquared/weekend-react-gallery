import React from 'react';
import axios from 'axios';
import './App.css';

// useState is a function provided by React
const useState = React.useState;
const useEffect = React.useEffect;

function App() {
  //destructuring galleryArray
  const [galleryArray, setGalleryArray] = useState ([]);

    const fetchGalleryArray = () => {
      axios({
        method: 'GET',
        url: '/gallery',
      }).then((response) => {
        console.log('pulling data from gallery ', response.data);
        setGalleryArray(response.data);
      }).catch((error) => {
        alert('Error making GET request.');
        console.log(error);
      })
    }
    // to call fetchGallery on load
    useEffect(() => {
      fetchGalleryArray();
    }, []);

    // const [counter, setCounter] = useState(0);
    // const handleLikeClick = () => {
    //   console.log('Clicked "Like" button!')
    //   setCounter(counter + 1);
    // }

    // PUT for incrementing photo like
    const incrementPhotoLike = (photoId) => {
        console.log(photoId);
      axios({
        method: 'PUT',
        url: `/gallery/like/${photoId}`
      }).then((response) => {
        fetchGalleryArray();
      }).catch((error) => {
        alert('Error in incrementing photo like')
        console.log(error);
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <ul>
          <>
          <div>
            {galleryArray.map((image) => <div> <img key={image.path} src={image.path} /> 
            <div>{ image.likes } people love it!</div>
            <button onClick={ () => { incrementPhotoLike (image.id) }}>Love it!</button>
            </div>)}
          </div>
          </>
        </ul>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
