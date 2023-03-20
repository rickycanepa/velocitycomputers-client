import React, { useEffect, useState } from "react"
import { getComputers } from "../../managers/ComputerManager"

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

    //Converts strings to floats in JSON objects to calculate total cost

    const totalCost = computers.map(computer => {return (
        parseFloat(computer.power_supply.price) + parseFloat(computer.processor.price) + parseFloat(computer.gpu.price) +
        parseFloat(computer.motherboard.price) + parseFloat(computer.ram.price) + parseFloat(computer.case.price) + parseFloat(computer.cpu_cooler.price) + 
        parseFloat(computer.keyboard.price) + parseFloat(computer.mouse.price) + parseFloat(computer.ssd.price)
    )
    })


return (<>
    <div>
        {computers.map(computer => {return  (<div className="computer-card" key={computer.id}>
                <div className="computerDetails">
                <p className="pc-name">{computer.name}</p>
                <p className="pc-description">{computer.description}</p>
                <p className="pc-customer">{computer.customer.user.username}</p>
                <p className="pc-psu">{computer.power_supply.title}</p>
                <p className="pc-customer">{computer.processor.title}</p>
                <p className="pc-customer">{computer.gpu.title}</p>
                <p className="pc-customer">{computer.motherboard.title}</p>
                <p className="pc-customer">{computer.ram.title}</p>
                <p className="pc-customer">{computer.case.title}</p>
                <p className="pc-customer">{computer.cpu_cooler.title}</p>
                <p className="pc-customer">{computer.keyboard.title}</p>
                <p className="pc-customer">{computer.mouse.title}</p>
                <p className="pc-customer">{computer.ssd.title}</p>
                <p className="pc-customer">Total Cost: ${totalCost}</p>
                {/* { deleteButton(itemObj.id) }
                <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                </div>
            </div>)})}
                        </div>
    </>)
}