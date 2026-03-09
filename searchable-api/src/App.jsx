import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/searchbar';
import { SearchResultsList } from './components/SearchResultsList';

function App() {
  const [results, setResults] = useState([]); 

  return (
    <div className="App">
      <div className="app-container">
        <h1>Searchable Users</h1>
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
      </div>
    </div>
  );
}

export default App;
