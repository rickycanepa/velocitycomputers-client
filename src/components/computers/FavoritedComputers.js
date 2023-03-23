import React, { useEffect, useState } from "react";
import { favorite, getComputers, unfavorite } from "../../managers/ComputerManager";
import "./ComputerList.css";

export const FavoritedComputers = () => {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    getComputers().then((data) => {
      setComputers(data);
    });
  }, []);
  
  const computersWithLikes = computers.filter(computer => {
    return computer.likes.some(like => like.id == localStorage.getItem("velocity_id"))
  });


  


  return (
    <>
      <div className="center-container">
        {computersWithLikes.map((computer) => {
          return (
            <div className="computer-card" key={computer.id}>
              <div className="computerDetails">
                <p className="pc-card">{computer.name}</p>
                <p className="pc-card">{computer.description}</p>
                <p className="pc-card">Created By: {computer.customer.user.username}</p>
                <p className="pc-card">
                  <a href={computer.power_supply.link} target="_blank" rel="noopener noreferrer">
                    Power Supply: {computer.power_supply.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.processor.link} target="_blank" rel="noopener noreferrer">
                    Processor: {computer.processor.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.gpu.link} target="_blank" rel="noopener noreferrer">
                    GPU: {computer.gpu.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.motherboard.link} target="_blank" rel="noopener noreferrer">
                    Motherboard: {computer.motherboard.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.ram.link} target="_blank" rel="noopener noreferrer">
                    Ram: {computer.ram.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.case.link} target="_blank" rel="noopener noreferrer">
                    Case: {computer.case.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.cpu_cooler.link} target="_blank" rel="noopener noreferrer">
                    CPU: {computer.cpu_cooler.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.keyboard.link} target="_blank" rel="noopener noreferrer">
                    Keyboard: {computer.keyboard.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.mouse.link} target="_blank" rel="noopener noreferrer">
                    Mouse: {computer.mouse.title}
                  </a>
                </p>
                <p className="pc-card">
                  <a href={computer.ssd.link} target="_blank" rel="noopener noreferrer">
                    SSD: {computer.ssd.title}
                  </a>
                </p>
                <p className="pc-card">Total Cost: ${computer.price}</p>
                {computer.joined ? (
                  <button
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
                    onClick={() => {
                      favorite(computer.id).then(() => {
                        getComputers().then((data) => setComputers(data));
                      });
                    }}
                  >
                    Favorite
                  </button>
                )}
                <p className="pc-card">{computer.likes.length} Favorites</p>
                {/* { deleteButton(itemObj.id) }
                <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
  
                    
            

