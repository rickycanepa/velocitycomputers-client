import React, { useEffect, useState } from "react"
import { getComputers } from "../../managers/ComputerManager"
import "./ComputerList.css"

export const Computers = () => {

    const [ computers, setComputers ] = useState([])
    
    useEffect(() => {
        getComputers().then(data => {
            setComputers(data)
        })
    }, [])

    const getAllComputers = () => {
        getComputers().then(data => {
            setComputers(data)
        })
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
                {/* { deleteButton(itemObj.id) }
                <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                </div>
            </div>)})}
                        </div>
    </>)
}