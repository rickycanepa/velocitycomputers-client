import React, { useState, useEffect } from 'react';
import { deleteComputer, getComputers, getComputersByCustomer } from '../../managers/ComputerManager';
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
        {computers.map(computer => {return  (<div className="computer-card" key={computer.id}>
                <div className="computerDetails">
                <p className="pc-card">{computer.name}</p>
                <p className="pc-card">{computer.description}</p>
                <p className="pc-card">Created By: {computer.customer.user.username}</p>
                <p className="pc-card">
                    <a href={computer.power_supply.link} target="_blank" rel="noopener noreferrer">
                    {computer.power_supply.title}</a></p>
                <p className="pc-card">
                <a href={computer.processor.link} target="_blank" rel="noopener noreferrer">
                    {computer.processor.title}</a></p>
                <p className="pc-card">
                <a href={computer.gpu.link} target="_blank" rel="noopener noreferrer">
                    {computer.gpu.title}</a></p>
                <p className="pc-card">
                <a href={computer.motherboard.link} target="_blank" rel="noopener noreferrer">
                    {computer.motherboard.title}</a></p>
                <p className="pc-card"><a href={computer.ram.link} target="_blank" rel="noopener noreferrer">
                    {computer.ram.title}</a></p>
                <p className="pc-card">
                <a href={computer.case.link} target="_blank" rel="noopener noreferrer">
                    {computer.case.title}</a></p>
                <p className="pc-card">
                <a href={computer.cpu_cooler.link} target="_blank" rel="noopener noreferrer">
                    {computer.cpu_cooler.title}</a></p>
                <p className="pc-card">
                <a href={computer.keyboard.link} target="_blank" rel="noopener noreferrer">
                    {computer.keyboard.title}</a></p>
                <p className="pc-card">
                <a href={computer.mouse.link} target="_blank" rel="noopener noreferrer">
                    {computer.mouse.title}</a></p>
                <p className="pc-card">
                <a href={computer.ssd.link} target="_blank" rel="noopener noreferrer">
                    {computer.ssd.title}</a></p>
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


