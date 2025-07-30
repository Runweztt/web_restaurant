import React, { useEffect, useState } from 'react';
import { ukFoods } from '../data/maindata';

const Filter = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    if (search.trim() === '') return;

    const results = ukFoods.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredFoods(results);
    setSearched(true);
  };

  const handleDelete = (id) => {
    const updatedList = filteredFoods.filter(item => item.id !== id);
    setFilteredFoods(updatedList);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Please wait, page is loading...
      </div>
    );
  }

  return (
    <div className="px-4 py-10 sm:px-8 lg:px-20 bg-white">
      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSearch}
            className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full sm:w-auto transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Search Results */}
      {searched && (
        <div className="mt-6">
          {filteredFoods.length === 0 ? (
            <p className="text-center text-gray-500">No food found with that name.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFoods.map(item => (
                <div
                  key={item.id}
                  className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>

                  <img
                    src={`https://i.imgur.com/${item.imageId}.jpg`}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.type}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Ingredients:</span> {item.ingredients.join(', ')}
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-medium">Availability:</span>{' '}
                    {item.availability ? (
                      <span className="text-green-600">Available</span>
                    ) : (
                      <span className="text-red-500">Not Available</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Origin:</span> {item.origin}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
