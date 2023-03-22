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


return (<>
    <div>
        {computers.map(computer => {return  (<div className="computer-card" key={computer.id}>
                <div className="computerDetails">
                <p className="pc-name">{computer.name}</p>
                <p className="pc-description">{computer.description}</p>
                <p className="pc-customer">{computer.customer.user.username}</p>
                <p className="pc-psu">{computer.power_supply.title}</p>
                <p className="pc-processor">{computer.processor.title}</p>
                <p className="pc-gpu">{computer.gpu.title}</p>
                <p className="pc-motherboard">{computer.motherboard.title}</p>
                <p className="pc-ram">{computer.ram.title}</p>
                <p className="pc-case">{computer.case.title}</p>
                <p className="pc-cpu_cooler">{computer.cpu_cooler.title}</p>
                <p className="pc-keyboard">{computer.keyboard.title}</p>
                <p className="pc-mouse">{computer.mouse.title}</p>
                <p className="pc-ssd">{computer.ssd.title}</p>
                <p className="pc-total-cost">Total Cost: ${computer.price}</p>
                {/* { deleteButton(itemObj.id) }
                <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button> */}
                </div>
            </div>)})}
                        </div>
    </>)
}