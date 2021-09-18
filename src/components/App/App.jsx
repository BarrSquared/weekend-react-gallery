import React from 'react';
import axios from 'axios';
import './App.css';

// useState is a function provided by React
const useState = React.useState;
const useEffect = React.useEffect;

function App() {
  //destructuring galleryArray
  const [galleryArray, setGalleryArray] = useState ([]);

  const [galleryItem, setGalleryItem] = useState('');

  const [counter, setCounter] = useState(0);

    const fetchGallery = () => {
      axios({
        method: 'GET',
        url: '/gallery',
      }).then((response) => {
        console.log(response.data);
        setGalleryArray(response.data);
      }).catch((error) => {
        alert('Error making GET request.');
        console.log(error);
      })
    }
    // to call fetchGallery on load
    useEffect(() => {
      fetchGallery();
    }, []);

    // function galleryItem({ picture }) {
    //   const [itemDisplayed, setItemDesplayed] = useState(true);
    // }

    const handleLikeClick = () => {
      console.log('Clicked "Like" button!')
      setCounter(counter + 1);
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <ul>
          <>
          {galleryArray.map(image => {
            (<li key={image.path}></li>)
          })}
          <div>{ counter } people love it!</div>
          <button onClick={ handleLikeClick }>Love it!</button>
          </>
        </ul>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
