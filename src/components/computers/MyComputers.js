import React, { useState, useEffect } from 'react';
import { getComputersByCustomer } from '../../managers/ComputerManager';

export const ComputersByCustomer = () => {
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    return <div>Loading...</div>;
  }
  return (<>
    <div>
        {computers.map(computer => {return  (<div className="computer-card" key={computer.id}>
                <div className="computerDetails">
                <p className="pc-name">Name: {computer.name}</p>
                <p className="pc-description">Description: {computer.description}</p>
                <p className="pc-customer">Created By: {computer.customer.user.username}</p>
                <p className="pc-psu">PSU: {computer.power_supply.title}</p>
                <p className="pc-processor">CPU: {computer.processor.title}</p>
                <p className="pc-gpu">GPU: {computer.gpu.title}</p>
                <p className="pc-motherboard">Motherboard: {computer.motherboard.title}</p>
                <p className="pc-ram">RAM: {computer.ram.title}</p>
                <p className="pc-case">Case: {computer.case.title}</p>
                <p className="pc-cpu_cooler">CPU: {computer.cpu_cooler.title}</p>
                <p className="pc-keyboard">Keyboard: {computer.keyboard.title}</p>
                <p className="pc-mouse">Mouse: {computer.mouse.title}</p>
                <p className="pc-ssd">SSD: {computer.ssd.title}</p>
                <p className="pc-total-cost">Total Cost: ${computer.price}</p>
                {/* { deleteButton(itemObj.id) }
                <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                </div>
            </div>)})}
                        </div>
    </>)


}


