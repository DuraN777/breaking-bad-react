import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/header';
import CharacterGrid from './components/characters/characterGrid';

// HOOKS :
// useState- allows to use state in functional component
// useEffect - to use ot fire off when when component loads,
// to mkae http request to get the data

// useState


const App = () => {
  // useState: define a piece of state, with 'items'(the cracters that come from API), and then setItems will be the function used to manipulate this piece of state.
  // set useState hook to default, an empty array. It starts with an empty array, then gets filled when useEffect fetches data.
  const [items, setItems] = useState([]);

// isLoading-to know if data is still being fetched,
// setIsLoading- a function to change that state
// isLoading is true by default, after data is fetched its set to false.
  const [isLoading, setIsLoading] = useState(true);

  // Axios is Promise based HTTP client for the browser and node.js
  useEffect ( () => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`);
      // set this fetched data to 'items' with setItems
      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;