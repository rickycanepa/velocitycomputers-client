import React, { useState, useEffect } from 'react';
import { deleteComputer, favorite, getComputers, getComputersByCustomer, unfavorite } from '../../managers/ComputerManager';
import { useNavigate } from 'react-router-dom';
import "./ComputerList.css"

export const ComputersByCustomer = () => {
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const handleClick = (id) => {
    deleteComputer(id)
    .then(() => {
        getComputersByCustomer(localStorage.getItem('velocity_id')).then(data => setComputers(data))
    })
} 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getComputersByCustomer(localStorage.getItem('velocity_id'));
        setComputers(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  }
  return (<>
  
  <div className="center-container">
      {computers.map((computer) => {
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
              <p className="text-gray-600 text-sm ml-4">{computer.likes.length} Favorites</p>
                <p className="pc-card">Total Cost: ${computer.price}</p>
                <button
                        onClick={() => {
                            navigate({ pathname: `/computers/edit/${computer.id}`})
                        }}>Edit</button>
                <button
                        onClick={() => {
                            handleClick(computer.id)
                            }}>Delete</button>

                {/* { deleteButton(itemObj.id) }
                <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                </div>
            </div>)})}
                        </div>
    </>)


}


