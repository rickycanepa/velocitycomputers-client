import React, { useEffect, useState } from "react";
import { favorite, getComputers, unfavorite } from "../../managers/ComputerManager";
import "./ComputerList.css";
import "./Toggle.css"

export const Computers = () => {
  const [computers, setComputers] = useState([]);
  const [sortByLikes, setSortByLikes] = useState(false);

  useEffect(() => {
    getComputers().then((data) => {
      setComputers(data);
    });
  }, []);

  const handleSortByLikesChange = () => {
    setSortByLikes(!sortByLikes);
  };

  const compareByLikes = (a, b) => {
    if (a.likes.length > b.likes.length) {
      return -1;
    }
    if (a.likes.length < b.likes.length) {
      return 1;
    }
    return 0;
  };

  const sortedComputers = sortByLikes ? computers.sort(compareByLikes) : computers;
    

return (
    <>
    <div className="center-container">
    <label className="mt-20 mr-100 flex items-center justify-end">
  <span className="text-gray-500 mr-2">Sort by Favorites:</span>
  <div className="relative">
    <input
      type="checkbox"
      checked={sortByLikes}
      onChange={handleSortByLikesChange}
      className="hidden"
    />
    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
    <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
  </div>
</label>
      {sortedComputers.map((computer) => {
        return (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-10" key={computer.id}>
            <div className="px-6 py-4">
              <p className="text-lg font-bold text-gray-800 mb-2">{computer.name}</p>
              <p className="text-gray-600 text-sm mb-2">{computer.description}</p>
              <p className="text-gray-700 font-bold text-base mb-2">Created By: {computer.customer.user.username}</p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.power_supply.link} target="_blank" rel="noopener noreferrer">
                  Power Supply: {computer.power_supply.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.processor.link} target="_blank" rel="noopener noreferrer">
                  Processor: {computer.processor.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.gpu.link} target="_blank" rel="noopener noreferrer">
                  GPU: {computer.gpu.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.motherboard.link} target="_blank" rel="noopener noreferrer">
                  Motherboard: {computer.motherboard.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.ram.link} target="_blank" rel="noopener noreferrer">
                  Ram: {computer.ram.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.case.link} target="_blank" rel="noopener noreferrer">
                  Case: {computer.case.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.cpu_cooler.link} target="_blank" rel="noopener noreferrer">
                  CPU: {computer.cpu_cooler.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.keyboard.link} target="_blank" rel="noopener noreferrer">
                  Keyboard: {computer.keyboard.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.mouse.link} target="_blank" rel="noopener noreferrer">
                  Mouse: {computer.mouse.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">
                <a href={computer.ssd.link} target="_blank" rel="noopener noreferrer">
                  SSD: {computer.ssd.title}
                </a>
              </p>
              <p className="text-gray-700 font-bold text-base mb-2">Total Cost: ${computer.price}</p>
              {computer.joined ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    unfavorite(computer.id).then(() => {
                      getComputers().then((data) => setComputers(data));
                    });
                  }}
                >
                  Unfavorite
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    favorite(computer.id).then(() => {
                      getComputers().then((data) => setComputers(data));
                    });
                  }}
                >
                  Favorite
                </button>
              )}
              <p className="text-gray-600 text-sm ml-4">
                {computer.likes.length} {computer.likes.length === 1 ? 'Favorite' : 'Favorites'}
              </p>

            </div>
          </div>
        );
      })}
    </div>
  </>
)
}