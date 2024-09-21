import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/sach?query=${query}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search books" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(book => (
          <li key={book._id}>
            <a href={`/book/${book._id}`}>{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
