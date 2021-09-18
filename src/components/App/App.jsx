import React from 'react';
import './App.css';



// useState is a function provided by React
const useState = React.useState;

function App() {

  const [gallery, setGallery] = useState ([]);

    const fetchGallery = () => {
      axios({
        method: 'GET',
        url: '/gallery',
      }).then((response) => {
        console.log(response.data);
        setGallery(response.data);
      }).catch((error) => {
        alert('Error making GET request.');
        console.log(error);
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
